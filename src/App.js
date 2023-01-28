//App handling state - holding function that respond to the the user action

import React, { Component } from "react";
import Ideas from "./IdeasCard";
import Form from "./Form";
import "./App.css";
import ideasData from "./ideaData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: ideasData, //this represent in memory
    };
    this.addIdea = this.addIdea.bind(this);
    this.starIdea = this.starIdea.bind(this);
  }

  addIdea = (newIdea) => {
    this.setState({ ideas: [...this.state.ideas, newIdea] });
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
      console.log(updatedStar);
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
    console.log(id);
    const filteredIdeas = this.state.ideas.filter((idea) => idea.id !== id);

    this.setState({ ideas: filteredIdeas });
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
          <button onClick={(event) => this.showStaredIdea(event)}>
            Show Favorite
          </button>
          <Ideas
            ideas={this.state.ideas}
            onDeleteIdea={this.deleteIdea}
            onStarIdea={this.starIdea}
            showStaredIdea={this.showStaredIdea}
          />
        </main>
      </div>
    );
  }
}

export default App;
