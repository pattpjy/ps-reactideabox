class Idea {
  constructor(ideaObj) {
    this.id = ideaObj.id;
    this.title = ideaObj.title;
    this.description = ideaObj.description;
    this.isStared = ideaObj.isStared || false;
  }
}

export default Idea;
