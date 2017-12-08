import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../services/task.service';
import { AuthService } from '../../services/auth.service';

import { Task } from '../../models/task.model';

import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {

  currentUser: Observable<any>;
  tasks: Observable<Task[]>;

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

  addTask(data) {
    this.taskService.addTask(this.authService.user.uid, data);
  }

  deleteTask(taskId: string) {
    this.taskService.deleteTask(taskId, this.authService.user.uid);
  }

}
