import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from "../../../../services/user.service";
import {User} from "../../../../models/User.model";

@Component({
  selector: 'app-user-picked',
  templateUrl: './user-picked.component.html',
  styleUrls: ['./user-picked.component.css']
})
export class UserPickedComponent implements OnInit {

  user: User;

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit() {
    this.getUserById();
  }

  getUserById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.userService.getUserById(id)
      .subscribe(user => this.user = user);
  }
}
