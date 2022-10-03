import React from "react";
import Card from "./Card";

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

const cards = [
  {
    id: 1,
    title: "Juanso Web",
    image: image1,
    url: "https://www.linkedin.com/in/juan-s-solis/",
    text: 'Es mi texto de ejemplo'
  },
  {
    id: 2,
    title: "Juanso Porfolio",
    image: image2,
    url: "https://www.linkedin.com/in/juan-s-solis/",
  },
  {
    id: 3,
    title: "Juanso Instagram",
    image: image3,
    url: "https://www.linkedin.com/in/juan-s-solis/",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map((card) => (
          <div className="col-md-4" key={card.id}>
            <Card title={card.title} imageSource={card.image} url={card.url} text={card.text} />
          </div>
        ))}
      </div>
    </div>
  );
}


export default Cards;
