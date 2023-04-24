import React from "react";

const Card = ({ cardTitle, cardText }) => {
  return (
    <div className="Card">
      <p className="card_title">{cardTitle}</p>
      <p className="card_text">{cardText}</p>
    </div>
  );
};

export default Card;
