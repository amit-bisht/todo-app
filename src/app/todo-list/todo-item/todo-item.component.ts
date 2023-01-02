import { Component, OnInit } from '@angular/core';
import { ToDoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  constructor(private todoService:ToDoService){}
  toDoItems=[]
  ngOnInit(): void {
    this.toDoItems=this.todoService.getToDoList()
  }
  onDelete(id:number){
    console.log("this was called")
    this.todoService.deleteToDoItem(id)
    this.toDoItems=this.todoService.getToDoList()
  }
  
}
