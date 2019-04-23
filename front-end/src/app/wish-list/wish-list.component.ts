import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  private wishListService: any;

  constructor() { }

  ngOnInit() {
  }

  editInfo() {

  }

  deleteInfo() {
    this.wishListService.deleteWish();
  }
}
