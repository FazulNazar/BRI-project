import {User} from '../models/User.model';
import {BehaviorSubject, Subject} from 'rxjs';
import {catchError, take} from "rxjs/operators";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

// import { Subject } from 'rxjs/Subject';

export class UserService {
  private users: User[] = [];
  userSubject = new Subject<User[]>();

  // public users$: BehaviorSubject<User[]> = new BehaviorSubject(this.users);


  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }



  getUser() {
    return(this.users);
  }

}
