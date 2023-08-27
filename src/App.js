import { useState, useEffect } from "react";
import Progress from "./components/Progress";
import "../index.css";

let timer;
function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    timer = setInterval(() => {
      setValue((prevState) => prevState + 1);
    }, 30);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="app">
      {value === 100 && clearInterval(timer)}
      <span>My Progressbar</span>
      <Progress value={value} />
    </div>
  );
}

export default App;
