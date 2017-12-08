import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operator/map';

import { TaskService } from './services/task.service';
import { AuthService } from './services/auth.service';

import { Task } from './models/task.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  currentUser: Observable<any>;
  dueDate: Date;
  priority: string;
  tasks: Observable<Task[]>;
  text: string;

  constructor(private taskService: TaskService,
              private authService: AuthService) {}

  ngOnInit() {
    this.currentUser = this.authService.userObservable();
    this.currentUser
      .filter(res => res)
      .subscribe(user => {
        this.tasks = this.taskService.getTasks(user.uid);
      });
  }

  private addTask() {
    const data = {
      'text': this.text,
      'priority': this.priority,
      'publishDate': new Date(),
      'dueDate': this.dueDate || new Date()
    };

    this.taskService.addTask(this.authService.user.uid, data);
  }

  private deleteTask(taskId: string) {
    this.taskService.deleteTask(taskId, this.authService.user.uid);
  }

  private loginGoogle() {
    this.authService.loginGoogle();
  }

  private logout() {
    this.authService.logout();
  }

}
