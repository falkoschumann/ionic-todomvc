import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private storage: Storage) { }

  async addTodo(text: string) {
    let todos = await this.storage.get('todos');
    if (todos == null) {
      todos = Array<Todo>();
    }
    todos.push({ text });
    return this.storage.set('todos', todos);
  }
}
