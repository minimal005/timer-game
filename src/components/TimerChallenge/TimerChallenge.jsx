import { useState, useRef } from "react";
import { StyleChallenge, ChallengeTime } from "./StyleChallenge";
import ResultModal from "../ResultModal/ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    handleStop();

    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 100);
    }, 100);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }
  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        result={timerIsActive ? "won" : "lost"}
        remaningTime={timeRemaining}
        onReset={handleReset}
      />
      <StyleChallenge>
        <h2>{title}</h2>
        <ChallengeTime>
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </ChallengeTime>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "time is running" : "Timer inactive"}
        </p>
      </StyleChallenge>
    </>
  );
}
