import React from "react";
import classes from "./Button.scss";

const Button = (props) => {
  return (
    <button {...props} className={ props.variant || "primary"}>
      {props.children}
    </button>
  );
};

export default Button;
