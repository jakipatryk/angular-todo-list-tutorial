import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { switchMap } from 'rxjs/operators/switchMap';

import { User } from '../models/user.model';


@Injectable()
export class AuthService {

  private currentUser: BehaviorSubject<any> = new BehaviorSubject<any>(false);

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore) {
    this.afAuth.authState
      .switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return Observable.of(null);
        }
      })
      .subscribe(user => {
        this.currentUser.next(user);
      });
  }

  get user(): User {
    return this.currentUser.value;
  }

  userObservable(): Observable<any> {
    return this.currentUser.asObservable();
  }

  loginGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.socialSignIn(provider);
  }

  logout(): void {
    this.afAuth.auth.signOut();
    this.currentUser.next(null);
  }

  private updateUserData(user): Promise<void> {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };
    return userRef.set(data, { merge: true });
  }

  private socialSignIn(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        const user = credential.user;
        this.updateUserData(user);
      });
  }

}
