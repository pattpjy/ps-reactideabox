import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  constructor({
    title,
    description,
    id,
    onDeleteIdea,
    isStarred,
    onStarIdea,
    onComment,
    showComment,
  }) {
    super();
    this.state = {
      // show comment button
      active: false,
      inputComment: "",
    };
    this.title = title;
    this.description = description;
    this.id = id;
    this.onDeleteIdea = onDeleteIdea;
    this.isStarred = isStarred;
    this.onStarIdea = onStarIdea;
    this.onComment = onComment;
    this.showComment = showComment;
  }
  changeCommentStatus = () => {
    const currentState = this.state.active;
    this.setState(
      { active: !currentState } //check when comment is clicked
    );
  };
  handleChange = (event) => {
    this.setState({ inputComment: event.target.value });
  };
  //this handleChange only deals with one input value so I don't need event delegation, just need to create key pair value for idea object
  submitIdea = (event) => {
    event.preventDefault();
    this.onComment(this.id, this.state.inputComment);
    this.setState({ active: false, inputComment: "" });
  };

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h3>{this.title}</h3>
            <p>{this.description}</p>
            <p>comment: {this.props.showComment}</p>
            <button
              className="comment-btn"
              onClick={() => {
                this.changeCommentStatus();
              }}
            >
              <i className="fa-light fa-comment-dots"></i>comment
            </button>
            {this.state.active && (
              <div className="comment-container">
                <input
                  className="input-comment"
                  type="text"
                  placeholder="add comment"
                  name="comment"
                  value={this.state.inputComment}
                  onChange={(event) => this.handleChange(event)}
                />
                <button
                  className="submit-comment-btn"
                  onClick={(event) => {
                    this.submitIdea(event);
                  }}
                >
                  add
                </button>
              </div>
            )}
          </div>
          <div className="card-action">
            <button
              className={
                this.props.isStarred ? "fa-solid fa-heart" : "fa-light fa-heart"
              }
              onClick={() => {
                this.onStarIdea(this.id);
              }}
            ></button>
            <button
              className="fa-light fa-xmark"
              onClick={() => this.onDeleteIdea(this.id)}
            ></button>
          </div>
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
