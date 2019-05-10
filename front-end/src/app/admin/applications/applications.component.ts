import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../../../models/User.model";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  students$: Observable<User[]>;
  public userList: User[];
  FirstName: string;
  LastName: string;
  Filiere: string;
  NumEtu: string;


  constructor(public userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
     this.userService.getStudents()
      .subscribe(user => {
        this.userList = user;
      });
  }

}
