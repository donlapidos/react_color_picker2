import { useState, useRef } from "react";

function App() {
  const [randomInput, setRandomInput] = useState("");
  const [seconds, setSeconds] = useState(0);

  const renders = useRef(0);
  const timerId = useRef();
  const inputRef = useRef();

  const handleChange = (e) => {
    setRandomInput(e.target.value);
    renders.current++;
  }

  const startTimer = () => {
    timerId.current = setInterval(() => {
      renders.current++;
      setSeconds(prev => prev + 1);
    }, 1000)
    inputRef.current.focus();
  }
  const stopTimer = () => {
    clearInterval(timerId.current)
    timerId.current = 0;
    inputRef.current.focus();
  }
  const resetTimer = () => {
    stopTimer();
    if (seconds) {
      renders.current++;
      setSeconds(0);
    }
    inputRef.current.focus();
  }
  return (
    <main className="App">

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter a value"
        value={randomInput}
        onChange={handleChange}
      />

      <p>Renders: {renders.current}</p>

      <section >
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </section>

      <p>{randomInput}</p>

      <p>Seconds: {seconds}</p>
    </main>
  );
}

export default App;
