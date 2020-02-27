import { Injectable } from '@angular/core';

import { Todo } from './todo';
import { TodoProvider } from './todo.provider';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private provider: TodoProvider) { }

  async getTodos(): Promise<Array<Todo>> {
    return await this.provider.load();
  }

  async addTodo(text: string): Promise<any> {
    const todos = await this.provider.load();
    todos.push({
      id: this.nextId(todos),
      text,
      isCompleted: false
    });
    return this.provider.save(todos);
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
    return this.provider.update({ ...todo, isCompleted: !todo.isCompleted });
  }
}
