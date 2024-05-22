import React from "react";
import "./cards.css";
type CuercardProps = {
  image: string;
  text: string;
};

const Cuercard = (props: CuercardProps) => {
  const { text = "Send Money", image } = props;
  return (
    <div className="cardsContainer">
      <img
        src={image}
        alt="cardsImage"
        className="cardImage"
        height={80}
        width={80}
      />
      <p className="cardText">{text}</p>
    </div>
  );
};

export default Cuercard;
