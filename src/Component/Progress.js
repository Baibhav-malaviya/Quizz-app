function Progress({ idx, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <div className="progress">
      <progress
        value={idx + Number(answer !== null)}
        max={numQuestions}
      ></progress>
      <p>
        <strong>{idx + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </div>
  );
}

export default Progress;
