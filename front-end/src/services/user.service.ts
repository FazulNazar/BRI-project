import {User} from '../models/User.model';
import {BehaviorSubject, Subject} from 'rxjs';
import {catchError, take} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ErrorService} from './error';
import {httpOptionsBase, serverUrl} from '../configs/server.config';
import {UniversityModel} from '../models/University.model';

// import { Subject } from 'rxjs/Subject';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  private httpOptions = httpOptionsBase;
  private users: User[] = [];
  userSubject = new Subject<User[]>();

  public users$: BehaviorSubject<User[]> = new BehaviorSubject(this.users);
  private url = serverUrl + '/university';

  constructor(public http: HttpClient, private errorService: ErrorService) {

    this.url = ' http://localhost:9428/api/students';
    this.getStudentsByHttp();
    this.users$ = new BehaviorSubject(this.users);
  }

  // public users$: BehaviorSubject<User[]> = new BehaviorSubject(this.users);


  getStudentsByHttp() {

    this.http.get<User[]>(this.url).subscribe(user => {
      this.users = user;
      this.users$.next(this.users);
    });
  }

    emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }

  postStudent(user: User) {
    this.http.post<User>(this.url, user, this.httpOptions)
      .pipe(
        take(1),
        catchError((err: HttpErrorResponse) =>
          this.errorService.handleError<User>(err, 'post /students'))
      ).subscribe((users) => this.getStudentsByHttp());
  }



  getUser() {
    return(this.users);
  }

}
