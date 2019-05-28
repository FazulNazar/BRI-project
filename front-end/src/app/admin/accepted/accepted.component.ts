import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/User.model";
import  {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-accepted',
  templateUrl: './accepted.component.html',
  styleUrls: ['./accepted.component.css']
})
export class AcceptedComponent implements OnInit {

  public userList: User[];
  public orderedUser: User[];

  constructor(public userService: UserService) {
    this.userService.students$.subscribe((students) => this.userList = students);
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getStudentsByObservable()
      .subscribe(user => {
        this.userList = user;
        this.sortBy('name');
      });
  }

  sortBy(field: string) {
    this.userList.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    this.orderedUser = this.userList;
  }

}
