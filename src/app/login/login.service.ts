import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // isLoggedIn = false;
  loginSubject = new BehaviorSubject<boolean>(false);
  loginAction = this.loginSubject.asObservable();

  roleSubject = new BehaviorSubject<string>('');
  roleAction = this.roleSubject.asObservable();
  constructor() { }

  login(userName: string, password: string) {
    if (userName === 'admin' && password === 'admin') {
      this.roleSubject.next('admin');
      this.loginSubject.next(true);
    }
    if (userName === 'user' && password === 'user') {
      this.loginSubject.next(true);
    }
    return this.loginAction;
  }

  loginStatus() {
    return this.loginAction;
  }

  userRole() {
    return this.roleAction;
  }

  logout() {
    this.loginSubject.next(false);
  }

}
