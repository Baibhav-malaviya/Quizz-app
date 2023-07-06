import Options from "./Options";
import Footer from "./Footer";

function Question({ question, dispatch, answer, idx, numQuestions, tick }) {
  return (
    <>
      <div>
        <h3>
          <strong>Q. </strong>
          {question.question}
        </h3>
      </div>
      <Options question={question} dispatch={dispatch} answer={answer} />

      <Footer
        dispatch={dispatch}
        answer={answer}
        idx={idx}
        numQuestions={numQuestions}
        tick={tick}
      />
    </>
  );
}

export default Question;
