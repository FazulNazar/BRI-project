import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../../services/user.service';
import {User} from '../../../../models/User.model';
import {WishModel} from '../../../../models/Wish.model';
import {WishService} from '../../../../services/wish.service';

@Component({
  selector: 'app-user-picked',
  templateUrl: './user-picked.component.html',
  styleUrls: ['./user-picked.component.css']
})
export class UserPickedComponent implements OnInit {

  user: User;
  public wishList: WishModel[] = [];

  constructor(private route: ActivatedRoute, private userService: UserService, private  wishService: WishService) {}

  ngOnInit() {
    this.getUserById();
    this.getWishes();
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
}
