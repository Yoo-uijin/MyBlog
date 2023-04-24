import React from "react";

const Card = ({ text, type }) => {
  const cardType = ["good", "normal", "bad", "very bad"].includes(type)
    ? type
    : "default";

  return <div className={["Card", `Card_${cardType}`].join(" ")}>{text}</div>;
};

Card.defaultProps = { type: "default" };

export default Card;
