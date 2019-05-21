import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../../services/user.service';
import {User} from '../../../../models/User.model';
import {WishModel} from '../../../../models/Wish.model';
import {WishService} from '../../../../services/wish.service';
import {SessionService} from '../../../../services/session/session.service';

@Component({
  selector: 'app-user-picked',
  templateUrl: './user-picked.component.html',
  styleUrls: ['./user-picked.component.css']
})
export class UserPickedComponent implements OnInit {

  user: User;
  public wishList: WishModel[] = [];
  private isAdmin: boolean;
  private isAdminPinna: boolean;
  private isConnected: boolean;

  constructor(private route: ActivatedRoute, private userService: UserService, private  wishService: WishService,
              private sessionService: SessionService) {}

  ngOnInit() {
    this.getUserById();
    this.getWishes();
    this.isAdmin = this.sessionService.isAdmin();
    this.isAdminPinna = this.sessionService.isAdminPinna();
    this.isConnected = this.sessionService.isLoggedIn();
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
