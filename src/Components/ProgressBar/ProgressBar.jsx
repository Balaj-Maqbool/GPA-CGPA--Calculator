import { Circle } from "rc-progress";
import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ CGPA, GPA }) => {
  const name = CGPA ? "CGPA" : "" || GPA ? "GPA" : "";
  const value = CGPA?.cgpa || GPA?.gpa || "0.00";
  const percentage = CGPA?.cgpa_percentage || GPA?.gpa_percentage || 1;

  return (
    <div className="progress-bar-container">
      <div className="circle-container">
        <Circle
          percent={percentage}
          strokeColor={{
            "0%": "#ff7f50", // Gradient start color
            "100%": "#1e90ff", // Gradient end color
          }}
          strokeWidth={6}
          trailWidth={5}
          trailColor="#d9d9d9"
          strokeLinecap="round"
          className="circle-progress-bar"
        />
        <div
          className="circle-center"
          style={{
            color: `rgb(${percentage * 2.5}, ${100 - percentage},230)`,
          }}
        >
          <span className="value">{value}</span>
        </div>
      </div>
      <span className="circle-label">{name}</span>
    </div>
  );
};

export default ProgressBar;
