import { useEffect, useState } from "react";
import "../../index.css";

function Progress({ value }) {
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));
  }, [value]);
  return (
    <div className="progress-content">
      <div className="progress-container">
        <div className="pregress-bar">
          <span style={{ zIndex: 1, color: percent > 48 ? "white" : "black" }}>
            {percent}%
          </span>
        </div>
        <div
          className="pregress-color"
          style={{
            width: `${percent}%`,
            borderRadius: percent > 99 ? "15px" : "",
          }}
        ></div>
      </div>
      <div>{percent === 100 ? "Completed!" : "Loading..."}</div>
    </div>
  );
}

export default Progress;
