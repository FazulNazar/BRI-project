import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { WishModel } from '../models/wish.model';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  selectedWish: WishModel;
  wishes: WishModel[];

  readonly URL_API = 'http://localhost:3000/api/wishes';

  constructor(private http: HttpClient) {
    this.selectedWish = new WishModel();
  }

  postWish(wish: WishModel) {
    return this.http.post(this.URL_API, wish);
  }

  getWishes() {
    return this.http.get(this.URL_API);
  }

  putWish(wish: WishModel) {
    return this.http.put(this.URL_API + `/${wish.id}`, wish);
  }

  deleteWish(id: string) {
    return this.http.delete(this.URL_API + `/${id}`);
  }
}
