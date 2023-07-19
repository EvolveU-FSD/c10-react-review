import React from "react";
const Button = ({ variant, children, ...rest }) => {
  const style = {
    border: variant === "outline" ? "1px solid black" : "1px solid white",
    backgroundColor: variant === "outline" ? "white" : "black",
    color: variant === "outline" ? "black" : "white",
  };
  return (
    <button style={style} {...rest}>
      {children}
    </button>
  );
};

export default Button;
