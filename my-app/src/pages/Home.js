import React, { useState } from "react";
import Phrase from "../components/Phrase";
import { phraseList } from "../util/phrases";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../components/Dropdown";

const Home = () => {
  const [view, setView] = useState(false);

  return (
    <div className="Home">
      <header>
        <h1 className="head_logo">TimeTam</h1>
        <button
          className="head_button"
          onClick={() => {
            setView(!view);
          }}
        >
          {view ? (
            <FontAwesomeIcon icon={faAngleUp} />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} />
          )}{" "}
          {view && <Dropdown />}
        </button>
      </header>

      <Phrase phraseList={phraseList} />
    </div>
  );
};

export default Home;
