import React, { useState } from "react";

const MyButton = ({ count, onClick }) => {
  return <button onClick={onClick}>Clicked {count} times!</button>;
};

export default MyButton;
