import { Component, OnInit } from '@angular/core';
import { WishModel } from '../../models/Wish.model';
import {WishService} from '../../services/wish.service';
import {UniversityModel} from '../../models/University.model';
import {Observable} from 'rxjs';
import {User} from '../../models/User.model';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';

declare var M: any;

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
})
export class WishListComponent implements OnInit {

  wish$: Observable<WishModel[]>;
  user: User;
  public wishList: WishModel[] = [];

  constructor(private route: ActivatedRoute, private userService: UserService, private  wishService: WishService) {
  }

  ngOnInit() {
    this.getWishes();
    this.getUserById();
  }

  getUserById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.userService.getUserById(id)
      .subscribe(user => this.user = user);
  }

  getWishes(): void {
    this.wishService.getWishList()
      .subscribe(wishes => {
        this.wishList = wishes;
      });
  }

  editWish(id: number) {
    this.wishService.deleteWish(id)
      .subscribe(wishes => {
        this.getWishes();
        //  M.toast({html: 'Deleted successfully'});
      });
  }


  deleteWish(id: number) {
    if (confirm('Vous êtes sûr de vouloir le supprimer ?')) {
      this.wishService.deleteWish(id)
        .subscribe(wishes => {
          this.getWishes();
        //  M.toast({html: 'Deleted successfully'});
        });
    }
  }


}
