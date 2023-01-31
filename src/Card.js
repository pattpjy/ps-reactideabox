import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  constructor({ title, description, id, onDeleteIdea, isStarred, onStarIdea }) {
    super();
    this.state = {};
    this.title = title;
    this.description = description;
    this.id = id;
    this.onDeleteIdea = onDeleteIdea;
    this.isStarred = isStarred;
    this.onStarIdea = onStarIdea;
  }

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h3>{this.title}</h3>
            <p>{this.description}</p>
          </div>

          <div className="card-header">
            <button
              className={
                this.isStarred ? "fa-solid fa-heart" : "fa-light fa-heart"
              }
              //maybe missing state where it check if staredIdea is equal to true
              onClick={() => {
                this.onStarIdea(this.id);
              }}
            ></button>
            <button
              className="fa-light fa-xmark"
              onClick={() => this.onDeleteIdea(this.id)}
            ></button>
          </div>
          <button className="comment-btn">
            <i className="fa-light fa-comment-dots"></i> comment
          </button>
        </div>
      </div>
    );
  }
}

// const Card = ({
//   title,
//   description,
//   id,
//   onDeleteIdea,
//   isStarred,
//   onStarIdea,
// }) => {
//   return (
//     <div>
//       <div className="card">
//         <div className="card-body">
//           <h3>{title}</h3>
//           <p>{description}</p>
//         </div>

//         <div className="card-header">
//           <button
//             className={isStarred ? "fa-solid fa-heart" : "fa-light fa-heart"}
//             //maybe missing state where it check if staredIdea is equal to true
//             onClick={() => {
//               onStarIdea(id);
//             }}
//           ></button>
//           <button
//             className="fa-light fa-xmark"
//             onClick={() => onDeleteIdea(id)}
//           ></button>
//         </div>
//         <button className="comment-btn">
//           <i class="fa-light fa-comment-dots"></i> comment
//         </button>
//       </div>
//     </div>
//   );
// };

export default Card;
