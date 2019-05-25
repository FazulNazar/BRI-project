import { WishModel } from '../models/Wish.model';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {catchError, take, tap} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {httpOptionsBase, serverUrl, wishesUrl} from '../configs/server.config';
import {ErrorService} from './error';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  public wishList: WishModel[] = [];
  private httpOptions = httpOptionsBase;
  private url = serverUrl + wishesUrl;
  public wish$: BehaviorSubject<WishModel[]> = new BehaviorSubject(this.wishList);


  constructor(public http: HttpClient, private errorService: ErrorService) {
  }

  private log(message: string) {
    console.log(message);
  }

  getWishByHttp() {
    this.http.get<WishModel[]>(this.url).subscribe(wish => {
      this.wishList = wish;
      this.wish$.next(this.wishList);
    });
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

  postWish(wish: WishModel): Observable<WishModel> {
    return this.http.post<WishModel>(this.url, wish, this.httpOptions)
      .pipe(
        take(1),
        catchError((err: HttpErrorResponse) =>
          this.errorService.handleError<WishModel>(err, 'post wish'))
      );
  }

  updateWish(wish: WishModel): Observable<WishModel> {
    const newUrl = `${this.url}/${wish.id}`;
    return this.http.put<WishModel>(newUrl, this.httpOptions).pipe(
      tap(_ => this.log(`put wish id=${wish.id}`)));
  }

  deleteWish(id: number): Observable<WishModel> {
    const newUrl = `${this.url}/${id}`;
    return this.http.delete<WishModel>(newUrl, this.httpOptions).pipe(
      tap(_ => this.log(`deleted wish id=${id}`)));
  }

}

