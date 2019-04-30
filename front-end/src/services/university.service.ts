import {User} from '../models/User.model';
import {UniversityModel} from '../models/university.model';
import {BehaviorSubject, Subject} from 'rxjs';
import {catchError, take} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {httpOptionsBase, serverUrl} from '../configs/server.config';
import {ErrorService} from "./error";

// import { Subject } from 'rxjs/Subject';

export class UniversityService {
  private universityList: UniversityModel[] = [];
  universitySubject = new Subject<UniversityModel[]>();

  private url = serverUrl + '/university';

  private httpOptions = httpOptionsBase;

  public university$: BehaviorSubject<UniversityModel[]> = new BehaviorSubject(this.universityList);

  public studentViewed$: BehaviorSubject<UniversityModel> = new BehaviorSubject<UniversityModel>(null);


  constructor(public http: HttpClient, private errorService: ErrorService) {
  }


  emitUsers() {
    this.universitySubject.next(this.universityList.slice());
  }

  getUniversity() {
    this.http.get<UniversityModel[]>(this.url)
      .pipe(
        take(1),
        catchError((err: HttpErrorResponse) => this.errorService.handleError<UniversityModel[]>(err, 'get /university', [])))
      .subscribe((students: UniversityModel[]) => {
        this.university$.next(students);
        this.universityList = students;
      });
  }

  addUser(university: UniversityModel) {
    this.universityList.push(university);
    this.emitUsers();
  }


  getUser() {
    return (this.universityList);
  }

}
