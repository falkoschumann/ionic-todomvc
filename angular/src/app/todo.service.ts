import { Injectable } from '@angular/core';

import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos = Array<Todo>();

  constructor() { }

  addTodo(text: string) {
    this.todos.push({ text });
    console.log('Added todo', text);
  }
}
