import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/User.model';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  public userList: User[];
  private FirstName: string;
  private LastName: string;
  private Filiere: string;
  private NumEtu: string;


  constructor(public userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getStudentsByObservable()
      .subscribe(user => {
        this.userList = user;
      });
  }
}


