import { Component, Input,Output} from '@angular/core';
import { Todo } from 'app/Todo';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo:Todo;
  @Input() i:number;
  @Output() todoDelete:EventEmitter<Todo>=new EventEmitter();
  @Output() todoCheckbox:EventEmitter<Todo>=new EventEmitter();
  onClick(todo:Todo){
    this.todoDelete.emit(todo)
  }
  onCheckboxClick(todo:Todo){
    this.todoCheckbox.emit(todo)
  }

}
