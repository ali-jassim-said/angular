import { ToDoService } from './../../Services/to-do.service';
import { ToDo } from './../../Models/to-do';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-to-do',
  imports: [],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent implements OnInit {
  todos: ToDo[] = [];
  newToDo: ToDo = {} as ToDo;

  constructor(private ToDoService: ToDoService)  { }

  ngOnInit() : void {
    this.getToDos();
  }

  getToDos() {
    this.ToDoService.getToDo().subscribe(x => {
      this.todos = x;
    });
  }

}
