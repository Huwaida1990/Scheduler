import { useState } from 'react'
export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newmode, replace = false) {
    if (replace) {
      history.pop();
    };

    setHistory([...history, newmode]);
    setMode(newmode);
  }

  function back() {
    const newHistory = [...history];
    if (newHistory.length > 1) {
      newHistory.pop();
      setMode(newHistory[newHistory.length - 1]);
      setHistory(newHistory);
    };
  }

  return { mode, transition, back }
}