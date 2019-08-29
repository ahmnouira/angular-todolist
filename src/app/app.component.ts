import { Component } from '@angular/core';
import {Model, ToDoItem} from "./model";

console.log(Model);

@Component({
  selector: 'app-todo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'proAngular6';
  model = new Model();

  // return the user name form the model
  getName() {
    return this.model.user;
  }

  // return the 'items' from the model
  getToDoList() {
      // return this.model.items;

    return this.model.items.filter(item => !item.done);
}

    addItem(newItem) {
      if (newItem !="") {
       return this.model.items.push(new ToDoItem(newItem, false));
      }
    }

}
