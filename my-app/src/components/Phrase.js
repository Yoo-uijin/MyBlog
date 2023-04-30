import React from "react";

const Phrase = ({ phraseList }) => {
  const randomNum = parseInt(Math.random() * phraseList.length + 1);

  const randomPhrase = phraseList.filter(
    (item) => parseInt(item.id) === randomNum
  );

  return (
    <div className="Phrase">
      <h2 className="Phrase_text">{randomPhrase[0].text}</h2>
      <h3 className="Phrase_writer">{randomPhrase[0].writer}</h3>
    </div>
  );
};

export default Phrase;
