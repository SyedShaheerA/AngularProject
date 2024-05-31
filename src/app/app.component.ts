import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './MyComponent/todos/todos.component';
import { AddTodoComponent } from './MyComponent/add-todo/add-todo.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosComponent, AddTodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FirstProj2';

  constructor(){
    // setTimeout(() => {
    //   this.title = "Changed Title";
    // }, 2000);

    
  }
  
}
