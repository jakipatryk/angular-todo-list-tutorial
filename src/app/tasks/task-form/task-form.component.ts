import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Task } from './../../models/task.model';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  @Output() taskEmitter: EventEmitter<Task> = new EventEmitter<Task>();

  text: string;
  priority: string;
  dueDate: Date;

  minDueDate: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  addTask() {
    this.taskEmitter.emit({
      'text': this.text,
      'priority': this.priority,
      'dueDate': this.dueDate || new Date(),
      'publishDate': new Date()
    });
  }

}
