import React from "react";
import "./styles.css";
const ProgressBar = ({ width: inputWidth }) => {
  return (
    <div>
      <div className="container">
        {inputWidth >= 0 && inputWidth <= 100 ? (
          <div className="innerContainer" style={{ width: `${inputWidth}%` }}>
            <p>{inputWidth}%</p>
          </div>
        ) : (
          alert("please enter value less than 100")
        )}
      </div>
    </div>
  );
};
export default ProgressBar;
