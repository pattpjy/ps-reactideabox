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
    <div>
      <div className="card">
        <div className="card-body">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <div className="card-header">
          <button
            className={isStarred ? "fa-solid fa-heart" : "fa-light fa-heart"}
            //maybe missing state where it check if staredIdea is equal to true
            onClick={() => {
              onStarIdea(id);
            }}
          ></button>
          <button
            className="fa-light fa-xmark"
            onClick={() => onDeleteIdea(id)}
          ></button>
        </div>
        <button className="comment-btn">
          <i class="fa-light fa-comment-dots"></i> comment
        </button>
      </div>
    </div>
  );
};

export default Card;
