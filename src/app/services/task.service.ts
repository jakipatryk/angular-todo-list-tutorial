import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs/Observable';

import { Task } from '../models/task.model';


@Injectable()
export class TaskService {

  constructor(private afs: AngularFirestore,
              private afAuth: AngularFireAuth) {}

  addTask(userId: string, data: Task) {
    return this.afs.collection('users/' + userId + '/tasks')
      .add({ ...data })
      .then(docRef => {
        this.afs.doc(`users/${userId}/tasks/${docRef.id}`)
          .update({'id': docRef.id});
    });
  }

  deleteTask(taskId: string, userId: string): Promise<void> {
    return this.getTask(taskId, userId).delete();
  }

  getTask(taskId: string, userId: string): AngularFirestoreDocument<Task> {
    return this.afs.doc<Task>(`users/${userId}/tasks/${taskId}`);
  }

  getTasks(userId: string): Observable<any> {
    return this.afs.collection(`users/${userId}/tasks/`, (ref) => {
      return ref.orderBy('priority').orderBy('dueDate');
    })
      .valueChanges();
  }

  updateTask(taskId: string, userId: string, data): Promise<void> {
    return this.getTask(taskId, userId).update(data);
  }

}
