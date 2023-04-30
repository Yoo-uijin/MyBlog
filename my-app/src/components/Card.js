import React from "react";

const Card = ({ type, value }) => {
  return (
    <div className="Card">
      <p className="Card_type">{type}</p>
      <p className="Card_value">{value}</p>
    </div>
  );
};

export default Card;
