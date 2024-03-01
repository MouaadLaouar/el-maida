import React from "react";
import "./HomeCard.scss";

import CardContent from "./HomeCards.Helper";

export default function HomeCard() {
  return (
    <div className="HomeCard">
      {CardContent.map((item, index) => (
        <div key={index} className="CardItem">
          <h1 className="Title">{ item.Title }</h1>
          <p className="Description">{ item.Description }</p>
          <p className="Sentence">{ item.sentence }</p>
        </div>
      ))}
    </div>
  );
}
