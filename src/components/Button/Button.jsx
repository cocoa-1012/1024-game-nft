import React from "react";
import "./index.css";

export const Button = (props) => {
  console.log("CC", props);
  return (
    <div>
      <button onClick={props.submit} className={`button ${props.className}`}>
        {props.title}
      </button>
    </div>
  );
};
