import React from "react";

export default function FinishedScreen({ points, maxPossiblePoints }) {
  const percentage = Math.floor((points / maxPossiblePoints) * 100);
  return (
    <p className="result">
      You scored <strong>{points}</strong> out of {maxPossiblePoints} (
      {percentage}%)
    </p>
  );
}
