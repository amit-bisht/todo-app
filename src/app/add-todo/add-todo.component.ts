import { Component } from '@angular/core';
import { ToDoService } from '../services/todo.service';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  constructor(private todoService:ToDoService){}
  todoText:string=""
  onAddTodo(){
    if(this.todoText.length<=5){
      alert("Please enter the text");
      return
    }
    this.todoService.addTodoItem(this.todoText)
    this.todoText=""
  }
}
