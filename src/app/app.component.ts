import { Component, OnInit } from '@angular/core';

import { TaskService } from './services/task.service';

import { Task } from './models/task.model';

import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  dueDate: Date;
  text: string;
  priority: string;
  tasks: Observable<Task[]>;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  private addTask(): void {
    const data = {
      'text': this.text,
      'priority': this.priority,
      'publishDate': new Date(),
      'dueDate': this.dueDate || new Date()
    };

    this.taskService.addTask(data);
  }

  private deleteTask(taskId: string): void {
    this.taskService.deleteTask(taskId);
  }

}
