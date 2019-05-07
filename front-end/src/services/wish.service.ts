import { WishModel } from '../models/Wish.model';
import {User} from '../models/User.model';
import {UniversityModel} from '../models/University.model';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {catchError, take, tap} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {httpOptionsBase, serverUrl} from '../configs/server.config';
import {ErrorService} from './error';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  // selectedWish: WishModel;
  private wishList: WishModel[] = [];
  private httpOptions = httpOptionsBase;
  private url = serverUrl + '/wish-list';

  constructor(public http: HttpClient, private errorService: ErrorService) {

  }

  private log(message: string) {
    console.log(message);
  }

  getWishList(): Observable<WishModel[]> {
    return this.http.get<WishModel[]>(this.url).pipe(
      tap(_ => this.log('fetched wishes'))
    );
  }

  getWish(id: number): Observable<WishModel> {
    const url = `${this.url}/${id}`;
    return this.http.get<WishModel>(url).pipe(
      tap(_ => this.log(`fetched wish id=${id}`))
    );
  }

  postWish(wish: WishModel) {

  }


  putWish(wish: WishModel) {

  }

  deleteWish(id: string) {

  }
}
