import React, { useState } from "react";
import Header from "../components/Header";

export function Card({ singer, title }) {
  return (
    <>
      <ul>
        <li>{singer}</li>
        <li>{title}</li>
      </ul>
    </>
  );
}

const playList = [
  { singer: "Melanie Martinez", title: "Void", id: 1 },
  { singer: "IU", title: "Sea", id: 2 },
  { singer: "NF", title: "HOPE", id: 3 },
];

const Music = () => {
  return (
    <div>
      <Header />
      music
      {playList.map((i) => (
        <Card singer={i.singer} title={i.title} key={i.id} />
      ))}
      {/* <Card singer="Melanie Martinez" title="Void" />
      <Card singer="IU" title="Sea" />
      <Card singer="NF" title="HOPE" /> */}
    </div>
  );
};

export default Music;
