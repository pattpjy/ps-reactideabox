class Idea {
  constructor(ideaObj) {
    this.id = ideaObj.id;
    this.title = ideaObj.title;
    this.description = ideaObj.description;
    this.isStarred = ideaObj.isStarred || false;
  }
}

export default Idea;
