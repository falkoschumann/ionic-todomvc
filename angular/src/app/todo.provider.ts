import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoProvider {

  constructor(private storage: Storage) { }

  async load(): Promise<Array<Todo>> {
    let todos = await this.storage.get('todos');
    if (todos == null) {
      todos = Array<Todo>();
    }
    return todos;
  }

  save(todos: Todo[]): Promise<any> {
    return this.storage.set('todos', todos);
  }

  async update(todo: Todo): Promise<any> {
    const todos = await this.load();
    const index = todos.findIndex(it => it.id === todo.id);
    todos[index] = { id: todo.id, text: todo.text, isCompleted: todo.isCompleted };
    return this.save(todos);
  }
}
