import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {

  @Input() task: Task;

  @Output() taskIdEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  deleteTask(taskId: string) {
    this.taskIdEmitter.emit(taskId);
  }

}
