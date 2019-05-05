import { Component, OnInit } from '@angular/core';
import { WishModel } from '../../models/wish.model';
import {WishService} from "../../services/wish.service";

declare var M: any;

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
  // providers: [WishService]   // en cours
})
export class WishListComponent implements OnInit {

  constructor(private wishService: WishService) {
  }

  ngOnInit() {
  }

  editWish() {

  }

  deleteWish(id: string) {
    //   if (confirm('Are you sure you want to delete it?')) {
    //     this.wishService.deleteWish(id)
    //       .subscribe(res => {
    //         // this.getWishes();
    //         M.toast({html: 'Deleted successfully'});
    //       });
    // }
  }
}
