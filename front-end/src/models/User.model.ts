import {WishModel} from './Wish.model';

export class User {
  constructor(
    public mail: string,
    public password: string,
    public name: string,
    public firstname: string,
    public birthday: string,
    public gender: string,
    public nationality: string,
    public address: string,
    public zip: string,
    public city: string,
    public phone: string,
    public studentNumber: string,
    public educationStream: string,
    public status: string,
    public id: number,
    // public wishListId: number
    // public wishList?: Array<WishModel>,
  ) {}
}
