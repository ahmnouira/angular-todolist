export class Model {
  user : string;
  items: ToDoItem[];
  constructor(){
    this.user = "Ahmed Nouira";
    this.items = [
      new ToDoItem("Buy Flower", false),
      new ToDoItem("Get shoes", false),
      new ToDoItem("Go to Stadium", true),
      new ToDoItem("Watch my favorite TV show", false)
    ]
  }
}

export class ToDoItem{
  action : string;
  done: boolean;
  constructor(action : string, done: boolean){
    this.action = action;
    this.done = done;
  }
}