import { Component, OnInit } from '@angular/core';
import { WishModel } from '../../models/Wish.model';
import {WishService} from '../../services/wish.service';
import {UniversityModel} from '../../models/University.model';
import {Observable} from 'rxjs';

declare var M: any;

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
  // providers: [WishService]   // en cours
})
export class WishListComponent implements OnInit {

  university$: Observable<WishModel[]>;
  public wishList: WishModel[] = [];

  constructor(public wishService: WishService) {
  }

  ngOnInit() {
    this.getWishes();
  }

  getWishes(): void {
    this.wishService.getWishList()
      .subscribe(wishes => {
        this.wishList = wishes;
      });
  }

  editWish() {

  }

  deleteWish() {
    //   if (confirm('Are you sure you want to delete it?')) {
    //     this.wishService.deleteWish(id)
    //       .subscribe(res => {
    //         // this.getWishes();
    //         M.toast({html: 'Deleted successfully'});
    //       });
    // }
  }


}
