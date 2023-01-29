import Idea from "./Idea";

class repoIdeas {
  constructor(dataArray) {
    this.allIdeas = dataArray.map((el) => new Idea(el)); //this is an array
  }
  getAllIdeas() {
    return this.allIdeas;
  }
  addingIdea(newIdea) {
    this.allIdeas.push(new Idea(newIdea));
  }
  deletedIdea(id) {
    const indexFound = this.allIdeas.findIndex((idea) => {
      return idea.id === id;
    });
    this.allIdeas.splice(indexFound, 1);
  }
}

export default repoIdeas;
