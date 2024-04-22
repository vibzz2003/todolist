import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit{
  ngOnInit(): void {

  }
  @Input() todo: Todo = {} as Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo>= new EventEmitter();
  constructor(){}

  onClick(todo: Todo){
    this.todoDelete.emit(this.todo);
    console.log("Onclick has been triggered");
  }

  OnCheckboxClick(todo:Todo){
    this.todoCheckbox.emit(todo);
  }
}
