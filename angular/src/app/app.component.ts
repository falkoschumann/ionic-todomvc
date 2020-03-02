import { Component, OnInit } from '@angular/core';

import { Platform, IonInput } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { TodoService } from './todo.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  filter = 'all';
  todos = Array<Todo>();
  itemsLeft = '';

  constructor(
    private todoService: TodoService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.update();
  }

  changeFilter(filter: string) {
    this.filter = filter;
    this.update();
  }

  private async update() {
    let todos = await this.todoService.getTodos();

    const count = todos.filter(it => !it.isCompleted).length;
    if (count === 0) {
      this.itemsLeft = 'No item left';
    } else {
      const suffix = count > 1 ? 's' : '';
      this.itemsLeft = `${count} item${suffix} left`;
    }

    switch (this.filter) {
      case 'active':
        todos = todos.filter(it => !it.isCompleted);
        break;
      case 'completed':
        todos = todos.filter(it => it.isCompleted);
        break;
      case 'all':
      default:
        break;
    }
    this.todos = todos;
  }

  async addTodo(event: KeyboardEvent) {
    if (event.code === 'Enter') {
      const input = event.target as unknown as IonInput;
      await this.todoService.addTodo(input.value as string);
      input.value = '';
      this.update();
    }
  }

  async toggleTodo(todo: Todo) {
    await this.todoService.toggleTodo(todo);
    this.update();
  }

  async deleteTodo(todo: Todo) {
    await this.todoService.deleteTodo(todo);
    this.update();
  }
}
