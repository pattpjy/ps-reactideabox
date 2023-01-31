import Idea from "./Idea";

class repoIdeas {
  constructor(dataArray) {
    this.allIdeas = dataArray.map((el) => new Idea(el)); //this is an array
  }

  getIdeaById(id) {
    return this.allIdeas.find((idea) => idea.id === id);
  }
  getAllIdeas() {
    return this.allIdeas;
  }
  getStarredIdea() {
    const staredIdeas = this.allIdeas.filter((idea) => {
      console.log(idea);
      return idea.isStarred === true;
    });
    return staredIdeas || [];
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

  switchingFav(id) {
    const foundIdea = this.getIdeaById(id);
    if (foundIdea.isStarred === false) {
      foundIdea.isStarred = true;
    } else {
      foundIdea.isStarred = false;
    }
  }
}

export default repoIdeas;
