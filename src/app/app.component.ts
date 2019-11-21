import { Component } from '@angular/core';
import { Model, ToDoItem } from "./model";

@Component({
  selector: 'app-todo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  model = new Model();

  // return the user name form the model
  getName() : string {
    return this.model.user;
  }

  // return the 'items' from the model not done
  getToDoList() : ToDoItem[] {
    return this.model.items.filter((item : ToDoItem ) => !item.done);
}

  // add new item
  addItem(newItem : string) : number {
    if (newItem !="") {
      return this.model.items.push(new ToDoItem(newItem, false));
    }
  }

}
