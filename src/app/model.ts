export class Model {
  user;
  items;
  constructor(){
    this.user = "Ahmed Nouira";
    this.items = [
      new ToDoItem("Buy Flower", false),
      new ToDoItem("Get shoes", false),
      new ToDoItem("Go to Stadium", false),
      new ToDoItem("Watch my favorite TV show", false)

    ]
  }
}

export class ToDoItem{
  action;
  done;
  constructor(action, done){
    this.action = action;
    this.done = done;
  }
}
