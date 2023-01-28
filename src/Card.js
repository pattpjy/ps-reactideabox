import React from "react";
import "./Card.css";

const Card = ({
  title,
  description,
  id,
  onDeleteIdea,
  isStarred,
  onStarIdea,
}) => {
  return (
    <div className="card">
      <div className="card-header">
        <button
          className={isStarred ? "starButtonActive" : "starBtn"}
          //maybe missing state where it check if staredIdea is equal to true
          onClick={() => {
            onStarIdea(id);
          }}
        ></button>

        <button className="deleteBtn" onClick={() => onDeleteIdea(id)}></button>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
