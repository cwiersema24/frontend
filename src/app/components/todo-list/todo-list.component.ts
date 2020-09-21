import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoDataService } from 'src/app/services/todo-data.service';
import { TodoListItem, TodoListItemCreate } from '../../models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  items$: Observable<TodoListItem[]>;
  hasCompletedItems$: Observable<boolean>;
  constructor(private service: TodoDataService) { }

  ngOnInit(): void {
    this.items$ = this.service.getTodoList();
    this.hasCompletedItems$ = this.service.hasCompletedItems();
  }

  addItem(what: HTMLInputElement): void {
    const newItem: TodoListItemCreate = {
      description: what.value
    };
    this.service.addTodoItem(newItem);
    what.value = '';
    what.focus();
  }
  markComplete(item: TodoListItem): void {
    this.service.markComplete(item);
  }

  removeCompleted(): void {
    // this.items = this.items.filter(item => item.completed === false);
    this.service.removeCompleted();
  }
  get hasCompletedItems(): boolean {
    // return this.items.some(item => item.completed);
    return true;
  }

}
