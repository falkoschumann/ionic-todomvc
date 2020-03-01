import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Todo } from './todo';

const STORAGE_KEY = 'todos';

@Injectable({
  providedIn: 'root'
})
export class TodoProvider {

  constructor(private storage: Storage) { }

  async load(): Promise<Array<Todo>> {
    let todos = await this.storage.get(STORAGE_KEY);
    if (todos == null) {
      todos = Array<Todo>();
    }
    return todos;
  }

  async save(todos: Array<Todo>): Promise<any> {
    return this.storage.set(STORAGE_KEY, todos);
  }
}
