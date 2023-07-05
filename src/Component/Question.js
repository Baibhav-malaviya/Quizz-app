import Options from "./Options";

function Question({ question, dispatch, answer, idx, numQuestions }) {
  return (
    <>
      <div>
        <h3>
          <strong>Q. </strong>
          {question.question}
        </h3>
      </div>
      <Options question={question} dispatch={dispatch} answer={answer} />
      {answer !== null &&
        (idx < numQuestions - 1 ? (
          <button
            className="btn btn-ui"
            onClick={() => dispatch({ type: "nextBtn" })}
          >
            Next
          </button>
        ) : (
          <button
            className="btn btn-ui"
            onClick={() => dispatch({ type: "finished" })}
          >
            Finish
          </button>
        ))}
    </>
  );
}

export default Question;
