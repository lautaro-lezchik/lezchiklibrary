import React from "react";

export interface CardProps {
  text: string;
}

const Card = (props: CardProps) => {
  const cardStyle = {
    color: "blue",
    backgroundColor: "orange",
    fontSize: "16px",
  };

  return <div style={cardStyle}>{props.text}</div>;
};

export default Card;