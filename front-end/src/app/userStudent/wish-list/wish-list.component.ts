import { Component, OnInit } from '@angular/core';
import { WishModel } from '../../../models/Wish.model';
import {WishService} from '../../../services/wish.service';
import {User} from '../../../models/User.model';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../services/user.service';
import {SessionService} from '../../../services/session/session.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
})
export class WishListComponent implements OnInit {

  currentUser: User;
  public wishList: WishModel[] = [];

  constructor(private route: ActivatedRoute, private userService: UserService, private  wishService: WishService,
              private sessionService: SessionService) {
  }

  ngOnInit() {
    this.getWishes();
    this.getUserById();
    this.currentUser = this.sessionService.getCurrentUserModel();
  }

  getUserById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.userService.getStudentById(id)
      .subscribe(user => this.currentUser = user);
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
      });
  }


  deleteWish(id: number) {
    if (confirm('Vous êtes sûr de vouloir le supprimer ?')) {
      this.wishService.deleteWish(id)
        .subscribe(wishes => {
          this.getWishes();
        });
    }
  }


  setAcceptedToDefault() {
    const tmpUser = new User(this.currentUser.mail,
      this.currentUser.password,
      this.currentUser.name,
      this.currentUser.firstname,
      this.currentUser.birthday,
      this.currentUser.gender,
      this.currentUser.nationality,
      this.currentUser.address,
      this.currentUser.zip,
      this.currentUser.city,
      this.currentUser.phone,
      this.currentUser.studentNumber,
      this.currentUser.educationStream,
      this.currentUser.status,
      this.currentUser.id,
      'false');
    this.userService.updateStudent(tmpUser as User);
  }
}
