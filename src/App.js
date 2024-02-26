import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTimeElapsed((timeElapsed) => timeElapsed + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p> Time: {formatTime(timeElapsed)}</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Stop" : "Start"}{" "}
      </button>
      <button onClick={() => setTimeElapsed(0)}> Reset</button>
    </div>
  );
}
