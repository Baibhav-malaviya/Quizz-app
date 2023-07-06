import Timer from "./Timer";

function Footer({ dispatch, answer, idx, numQuestions, tick }) {
  return (
    <footer>
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
      <Timer tick={tick} dispatch={dispatch} />
    </footer>
  );
}

export default Footer;
