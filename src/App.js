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
    this.addIdea = this.addIdea.bind(this);
    this.starIdea = this.starIdea.bind(this); // do we need this?
    this.showAllIdeas = this.showAllIdeas.bind(this);
  }

  addIdea = (newIdea) => {
    this.allIdeas.addingIdea(newIdea);
    this.setState({ ideas: this.allIdeas.getAllIdeas() });
  };

  starIdea = (id) => {
    //update staredIdea value to true >> idea[staredIdea] = true
    this.setState((prevState) => {
      const updatedStar = prevState.ideas.map((idea) => {
        if (idea.id === id) {
          idea["isStarred"] = true;
          console.log("star is click");
        }
        return idea;
      });
      return {
        ideas: updatedStar,
      };
    });
  };
  showStaredIdea = () => {
    const filterStaredIdea = this.state.ideas.filter(
      (idea) => idea.isStarred === true
    );

    this.setState({ ideas: filterStaredIdea });
  };
  deleteIdea = (id) => {
    // const filteredIdeas = this.state.ideas.filter((idea) => idea.id !== id);
    this.allIdeas.deletedIdea(id);
    this.setState({ ideas: this.allIdeas.getAllIdeas() });
  };
  showAllIdeas = () => {
    this.setState({ ideas: this.allIdeas.getAllIdeas() });
  };

  render() {
    return (
      <div className="main-view">
        <nav className="side-nav">
          <h2>Add awesome idea</h2>
          <Form className="form" addIdea={this.addIdea} />
        </nav>
        <main className="App">
          <h1>IdeaBox</h1>
          <button
            className="show-fav-btn"
            onClick={(event) => this.showStaredIdea(event)}
          >
            Show Favorite
          </button>
          <button
            className="show-all"
            onClick={(event) => this.showAllIdeas(event)}
          >
            Show All
          </button>
          <Ideas
            ideas={this.state.ideas}
            onDeleteIdea={this.deleteIdea}
            onStarIdea={this.starIdea}
            showStaredIdea={this.showStaredIdea}
            showAllIdeas={this.showAllIdeas}
          />
        </main>
      </div>
    );
  }
}

export default App;
