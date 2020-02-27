import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private storage: Storage) { }

  async getTodos(): Promise<Array<Todo>> {
    return await this.load();
  }

  async addTodo(text: string): Promise<any> {
    const todos = await this.getTodos();
    todos.push({
      id: this.nextId(todos),
      text,
      isCompleted: false
    });
    return this.save(todos);
  }

  async toggleTodo(todo: Todo): Promise<any> {
    const todos = await this.load();
    const index = todos.findIndex(it => it.id === todo.id);
    todos[index] = { id: todo.id, text: todo.text, isCompleted: !todo.isCompleted };
    return this.save(todos);
  }

  private async load(): Promise<Array<Todo>> {
    let todos = await this.storage.get('todos');
    if (todos == null) {
      todos = Array<Todo>();
    }
    return todos;
  }

  private save(todos: Todo[]): Promise<any> {
    return this.storage.set('todos', todos);
  }

  private nextId(todos: Array<Todo>): number {
    let id = 0;
    todos.map(it => it.id).forEach(it => {
      if (it > id) {
        id = it;
      }
    });
    return id + 1;
  }
}
