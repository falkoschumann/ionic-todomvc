import { Component } from '@angular/core';

import { Platform, IonInput } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

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

  addTodo(event: KeyboardEvent) {
    if (event.code === 'Enter') {
      const input = event.target as unknown as IonInput;
      this.todoService.addTodo(input.value as string);
    }
  }
}
