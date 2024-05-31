import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from '../../Todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { NgFor } from '@angular/common';
import { AddTodoComponent } from "../add-todo/add-todo.component";


@Component({
    selector: 'app-todos',
    standalone: true,
    templateUrl: './todos.component.html',
    styleUrl: './todos.component.css',
    imports: [RouterOutlet, TodoItemComponent, NgFor, AddTodoComponent]
})
export class TodosComponent {
  todos: Todo[];
  constructor(){
    this.todos = [
      {
        sno: 3,
        title: "This is title3",
        desc: "Description",
        active: true 
      },
      {
        sno: 2,
        title: "This is title2",
        desc: "Description",
        active: true 
      },
      {
        sno: 1,
        title: "This is title",
        desc: "Description",
        active: true 
      }
    ]
  }

  deleteTodo(todo: Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
  }

  addTodo(todo: Todo)
  {
    console.log(todo);
    this.todos.push(todo);
  }
}
