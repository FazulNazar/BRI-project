import {User} from '../models/User.model';
import {UniversityModel} from '../models/University.model';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {catchError, take, tap} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {httpOptionsBase, serverUrl} from '../configs/server.config';
import {ErrorService} from './error';
import { Injectable } from '@angular/core';

// import { Subject } from 'rxjs/Subject';
@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  private httpOptions = httpOptionsBase;
  // public selectedUniversity: UniversityModel;
  public universityList: UniversityModel[] = [];
  private url = serverUrl + '/university';
  public university$: BehaviorSubject<UniversityModel[]> = new BehaviorSubject(this.universityList);

  constructor(public http: HttpClient, private errorService: ErrorService) {

  //   this.url = 'http://localhost:9428/api/university';
  //   this.getUniversityByHttp();
  //   this.university$ = new BehaviorSubject(this.universityList);
  }

  //
  // emitUsers() {
  //   //this.universitySubject.next(this.universityList.slice());
  // }
  //
  getUniversityByHttp() {

    this.http.get<UniversityModel[]>(this.url).subscribe(university => {
      this.universityList = university;
      this.university$.next(this.universityList);
    });

  }

  getUniversities(): Observable<UniversityModel[]> {
    return this.http.get<UniversityModel[]>(this.url).pipe(
      tap(_ => this.log('fetched universities'))
    );
  }

  getUnivs(): Observable<UniversityModel[]> {
    return this.http.get<UniversityModel[]>(this.url) ;
  }

  getUniversity(id: number): Observable<UniversityModel> {
    const url = `${this.url}/${id}`;
    return this.http.get<UniversityModel>(url).pipe(
      tap(_ => this.log(`fetched university id=${id}`))
    );
  }
  private log(message: string) {
    console.log(message);
  }

  postUniversity(university: UniversityModel) {
    this.http.post<UniversityModel>(this.url, university, this.httpOptions)
      .pipe(
        take(1),
        catchError((err: HttpErrorResponse) =>
          this.errorService.handleError<User>(err, 'post /university'))
      ).subscribe((universityList) => this.getUniversityByHttp());
  }

  getUniversityList() {
    return (this.universityList);
  }





}
