import { Component, OnInit } from '@angular/core';

import { AuthService } from './services/auth.service';

import { User } from './models/user.model';

import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  currentUser: Observable<User>;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.currentUser = this.authService.userObservable();
  }

  private loginGoogle() {
    this.authService.loginGoogle();
  }

  private logout() {
    this.authService.logout();
  }

}
