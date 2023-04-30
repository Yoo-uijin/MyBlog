import React from "react";

const Phrase = ({ phraseList }) => {
  return (
    <div className="Phrase">
      <h2 className="Phrase_text">
        {phraseList[Math.floor(Math.random() * phraseList.length)].text}
      </h2>
      <h3 className="Phrase_writer">
        {phraseList[Math.floor(Math.random() * phraseList.length)].writer}
      </h3>
    </div>
  );
};

export default Phrase;
