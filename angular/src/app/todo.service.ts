import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private storage: Storage) { }

  async getTodos(): Promise<Array<Todo>> {
    let todos = await this.storage.get('todos');
    if (todos == null) {
      todos = Array<Todo>();
    }
    return todos;
  }

  async addTodo(text: string): Promise<any> {
    const todos = await this.getTodos();
    todos.push({
      id: this.nextId(todos),
      text,
      isCompleted: false
    });
    return todos;
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

  async toggleTodo(todo: Todo): Promise<any> {
    return this.update({ ...todo, isCompleted: !todo.isCompleted });
  }

  private async update(todo: Todo): Promise<any> {
    const todos = await this.getTodos();
    const index = todos.findIndex(it => it.id === todo.id);
    todos[index] = { id: todo.id, text: todo.text, isCompleted: todo.isCompleted };
    return this.save(todos);
  }

  private save(todos: Todo[]): Promise<any> {
    return this.storage.set('todos', todos);
  }
}
