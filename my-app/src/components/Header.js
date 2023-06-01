import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTemperatureHalf } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../components/Dropdown";

const Header = () => {
  const [view, setView] = useState(false);
  const linkStyle = { textDecoration: "none", color: "black" };

  return (
    <header>
      <Link to="/" style={linkStyle}>
        <h1 className="head_logo">TimeTam</h1>
      </Link>
      <ul className="head_category">
        <Link to="/music/:id" style={linkStyle}>
          <li>Music</li>
        </Link>
        <Link to="/poetry/:id" style={linkStyle}>
          <li>Poetry</li>
        </Link>
        <Link to="/develop/:id" style={linkStyle}>
          <li>Develop</li>
        </Link>
      </ul>
      <div className="head_right-wrapper">
        <button
          className="temp_btn"
          onClick={() => {
            setView(!view);
          }}
        >
          <FontAwesomeIcon icon={faTemperatureHalf} />
          {view && <Dropdown />}
        </button>

        <div className="head_login"></div>
      </div>
      {/* 
      <Link to="/new" style={linkStyle}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </Link>

     */}
    </header>
  );
};

export default Header;
