import React from "react";

const Card = (props: {
  key: number;
  cardTitle: string;
  cardDescription: string;
}) => {
  return (
    <div>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{props.cardTitle}</h5>
            <p className="card-text">{props.cardDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
