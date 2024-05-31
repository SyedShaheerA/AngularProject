import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from '../../Todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [RouterOutlet, TodoItemComponent, NgFor],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
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
}
