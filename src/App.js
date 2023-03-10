//App handling state - holding function that respond to the the user action

import React, { Component } from "react";
import Ideas from "./IdeasCard";
import Form from "./Form";
import "./App.css";
import ideasData from "./ideaData";
import repoIdeas from "./ideasRepo";

class App extends Component {
  constructor() {
    super();
    this.allIdeas = new repoIdeas(ideasData); //this represent data in memory
    this.state = {
      ideas: this.allIdeas.getAllIdeas(), //this represent data in memory
    };
    // this.addIdea = this.addIdea.bind(this);
    // this.starIdea = this.starIdea.bind(this); // do we need this?
    // this.showAllIdeas = this.showAllIdeas.bind(this);
  }

  addIdea = (newIdea) => {
    this.allIdeas.addingIdea(newIdea);
    this.setState({ ideas: this.allIdeas.getAllIdeas() });
  };

  starIdea = (id) => {
    this.allIdeas.switchingFav(id);
    console.log("is switching");
    this.setState({ ideas: this.allIdeas.getAllIdeas() });
  };

  showStarredIdea = () => {
    const showIdeas = this.allIdeas.getStarredIdea();
    this.setState({ ideas: showIdeas });
  };

  deleteIdea = (id) => {
    // const filteredIdeas = this.state.ideas.filter((idea) => idea.id !== id);
    this.allIdeas.deletedIdea(id);
    this.setState({ ideas: this.allIdeas.getAllIdeas() });
  };
  showAllIdeas = () => {
    this.setState({ ideas: this.allIdeas.getAllIdeas() });
  };
  addComment = (id, inputComment) => {
    this.allIdeas.addingComment(id, inputComment);
    this.setState({ ideas: this.allIdeas.getAllIdeas() });
  };

  render() {
    return (
      <div className="main-view">
        <nav className="side-nav">
          <h2>my ideas</h2>
          <button
            className="show-fav-btn"
            onClick={(event) => this.showStarredIdea(event)}
          >
            <i className="fa-light fa-heart"></i>
            Show Favorite
          </button>
          <button
            className="show-all"
            onClick={(event) => this.showAllIdeas(event)}
          >
            <i className="fa-light fa-house"></i>
            Show All
          </button>
        </nav>
        <main className="App">
          <h1>Be inspired today</h1>
          <Form className="form" addIdea={this.addIdea} />
          <Ideas
            ideas={this.state.ideas}
            onDeleteIdea={this.deleteIdea}
            onStarIdea={this.starIdea}
            showStarredIdea={this.showStarredIdea}
            showAllIdeas={this.showAllIdeas}
            onComment={this.addComment}
          />
        </main>
      </div>
    );
  }
}

export default App;
