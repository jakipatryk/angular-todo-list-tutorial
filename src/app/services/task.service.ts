import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';

import { Task } from '../models/task.model';


@Injectable()
export class TaskService {

  constructor(private afs: AngularFirestore) {}

  addTask(data: Task) {
    return this.afs.collection(`tasks/`).add({ ...data });
  }

  deleteTask(taskId: string): Promise<void> {
    return this.getTask(taskId).delete();
  }

  getTask(taskId: string): AngularFirestoreDocument<Task> {
    return this.afs.doc<Task>(`tasks/{taskId}`);
  }

  getTasks(): Observable<any> {
    return this.afs.collection(`tasks/`, (ref) => {
      return ref.orderBy('priority').orderBy('dueDate');
    })
      .valueChanges();
  }

}
