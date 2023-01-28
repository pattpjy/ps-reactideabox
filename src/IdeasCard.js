import React from "react";
import "./Ideas.css";
import Card from "./Card";

const Ideas = ({ ideas, onDeleteIdea, onStarIdea, showStaredIdea }) => {
  const ideaCards = ideas.map((idea) => {
    return (
      <Card
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.id}
        onDeleteIdea={onDeleteIdea} //naming - use onXxxx when there's action that going to happened on the component
        isStarred={idea.isStarred} // where do I put true or false for stared value
        onStarIdea={onStarIdea}
        showStaredIdea={showStaredIdea}
      />
    );
  });

  return <div className="ideas-container">{ideaCards}</div>;
};

export default Ideas;
