import React from "react";

const HoverableSpan = ({ handleMouseOver, handleMouseOut, text }) => {
  return (
    <span onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {text}
    </span>
  );
};

export default HoverableSpan;
