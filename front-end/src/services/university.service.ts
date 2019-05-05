import {User} from '../models/User.model';
import {UniversityModel} from '../models/University.model';
import {BehaviorSubject, Subject} from 'rxjs';
import {catchError, take} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {httpOptionsBase, serverUrl} from '../configs/server.config';
import {ErrorService} from './error';
import { Injectable } from '@angular/core';

// import { Subject } from 'rxjs/Subject';
@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  public universityList: UniversityModel[] = [];
  private url = serverUrl + '/university';
  public university$: BehaviorSubject<UniversityModel[]> = new BehaviorSubject(this.universityList);

  constructor(public http: HttpClient, private errorService: ErrorService) {

    this.url = 'http://localhost:9428/api/university';
    this.getUniversityByHttp();
    this.university$ = new BehaviorSubject(this.universityList);
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
  getUser() {
    return (this.universityList);
  }

}
