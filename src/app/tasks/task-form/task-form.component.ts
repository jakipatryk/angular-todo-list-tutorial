import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Task } from './../../models/task.model';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  @Output() taskEmitter: EventEmitter<Task> = new EventEmitter<Task>();

  taskForm: FormGroup;

  minDueDate = new Date();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createTaskForm();
  }

  addTask(): void {
    this.taskEmitter.emit({
      ...this.taskForm.value,
      'publishDate': new Date()
    });
  }

  private createTaskForm(): void {
    this.taskForm = this.formBuilder.group({
      text: ['', Validators.required],
      dueDate: [new Date()],
      priority: ['', Validators.required]
    });
  }

}
