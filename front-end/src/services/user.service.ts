import {User} from '../models/User.model';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {catchError, take, tap} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ErrorService} from './error';
import {httpOptionsBase, serverUrl} from '../configs/server.config';

// import { Subject } from 'rxjs/Subject';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  private httpOptions = httpOptionsBase;
  private url = serverUrl + '/students';

  private users: User[] = [];
  public users$: BehaviorSubject<User[]> = new BehaviorSubject(this.users);


  constructor(public http: HttpClient, private errorService: ErrorService) {

    this.url = ' http://localhost:9428/api/students';
    this.getStudentsByHttp();
    this.users$ = new BehaviorSubject(this.users);

  }

  // public users$: BehaviorSubject<User[]> = new BehaviorSubject(this.users);

  getStudents(): Observable<User[]> {
    this.log(this.users.toString());
    return this.http.get<User[]>(this.url).pipe(
      tap(_ => this.log('fetched students')),
      catchError(this.handleError<User[]>('getStudents', []))
    );

  }

  getUserById(id: number): Observable<User> {
    const url = `${this.url}/${id}`;
    return this.http.get<User>(url).pipe(
      tap(_ => this.log(`fetched university id=${id}`))
    );
  }


  getStudentsByHttp() {

    this.http.get<User[]>(this.url).subscribe(user => {
      this.users = user;
      this.users$.next(this.users);
    });
  }

// register
  postStudent(user: User) {
    this.http.post<User>(this.url, user, this.httpOptions)
      .pipe(
        take(1),
        catchError((err: HttpErrorResponse) =>
          this.errorService.handleError<User>(err, 'post /students'))
      ).subscribe((users) => this.getStudentsByHttp());
  }


  getUser() {
    return (this.users);
  }

  /** Log a UserService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // let the app keep running by returning an empty result
      return of(result as T);
    };
  }

}
