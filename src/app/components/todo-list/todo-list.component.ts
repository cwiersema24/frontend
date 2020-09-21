import { Component, OnInit } from '@angular/core';
import { TodoListItem } from '../../models/todo-list-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  items: TodoListItem[] = [
    { description: 'Gym' },
    { description: 'Make dinner' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  addItem(what: HTMLInputElement): void {
    const newItem: TodoListItem = {
      description: what.value
    };
    this.items = [newItem, ...this.items];
    what.value = '';
    what.focus();
  }

}
