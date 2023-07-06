import React from "react";

export default function FinishedScreen({
  points,
  maxPossiblePoints,
  dispatch,
  highscore,
}) {
  const percentage = Math.floor((points / maxPossiblePoints) * 100);
  // const highScore = Math.max(highScore, points);
  return (
    <>
      {" "}
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {percentage}%)
      </p>
      <p className="highscore">( Highscore : {highscore} points )</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}
