import { useEffect } from "react";

function Timer({ tick, dispatch }) {
  const min = Math.floor(tick / 60);

  const sec = tick % 60;
  console.log(`min : ${min.toString()} and sec  : ${sec.toString()}`);
  useEffect(
    function () {
      const id = setInterval(() => dispatch({ type: "tick" }), 1000);
      return function () {
        clearInterval(id);
      };
    },
    [dispatch]
  );
  return (
    <div className="timer">
      <p>
        {min.toString().length === 1 ? `0${min}` : sec}:
        {sec.toString().length === 1 ? `0${sec}` : sec}
      </p>
    </div>
  );
}

export default Timer;
