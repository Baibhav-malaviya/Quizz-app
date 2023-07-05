import React from "react";

const Options = ({ question, dispatch, answer }) => {
  return (
    <div className="options">
      {question.options.map((option, idx) => (
        <button
          className={`btn btn-option ${
            answer === null ? " " : answer === idx ? "answer" : ""
          } ${
            answer === null
              ? " "
              : idx === question.correctOption
              ? "correct"
              : "wrong"
          } `}
          key={option}
          disabled={answer !== null}
          onClick={() => dispatch({ type: "nextQuestion", payLoad: idx })}
        >
          {idx + 1}
          <span>. </span>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
