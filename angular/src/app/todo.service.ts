import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private storage: Storage) { }

  async getTodos() {
    let todos = await this.storage.get('todos');
    if (todos == null) {
      todos = Array<Todo>();
    }
    return todos;
  }

  async addTodo(text: string) {
    const todos = await this.getTodos();
    todos.push({ text });
    return this.storage.set('todos', todos);
  }
}
