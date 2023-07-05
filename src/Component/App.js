import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import Progress from "./Progress";
import FinishedScreen from "./FinishedScreen";

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payLoad, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    case "nextQuestion":
      const question = state.questions[state.idx];
      return {
        ...state,
        answer: action.payLoad,
        points:
          question.correctOption === action.payLoad
            ? state.points + question.points
            : state.points,
      };
    case "finished":
      return { ...state, status: "finished" };
    case "nextBtn":
      return { ...state, idx: state.idx + 1, answer: null };
    default:
      throw new Error("Unknown action");
  }
}
const initialState = {
  questions: [],
  status: "loading",
  idx: 0,
  answer: null,
  points: 0,
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, idx, answer, points } = state; //Destructuring the state object, can also be destructured in above line, but for now it is fine

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, curr) => prev + curr.points,
    0
  );

  useEffect(function () {
    fetch(`http://localhost:8000/questions`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payLoad: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}

        {status === "active" && (
          <>
            <Progress
              idx={idx}
              numQuestions={numQuestions}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />

            <Question
              question={questions[idx]}
              dispatch={dispatch}
              answer={answer}
              idx={idx}
              numQuestions={numQuestions}
            />
          </>
        )}
        {status === "finished" && (
          <FinishedScreen
            points={points}
            maxPossiblePoints={maxPossiblePoints}
          />
        )}
      </Main>
    </div>
  );
}
