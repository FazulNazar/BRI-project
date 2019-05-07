import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User.model';
import {UserService} from '../../services/user.service';
import {SessionService} from '../../services/session/session.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  login: string;
  password: string;
  user: User[];


  constructor(private userService: UserService, private sessionService: SessionService) {
    this.userService.users$.subscribe((user) => {
      this.user = user;
    });
  }



  getUser(): void {
    this.userService.getStudents()
      .subscribe(user => this.user = user);
  }
  ngOnInit() {
    this.getUser();
  }

  onSubmitForm() {
    this.user.forEach(student => {
      if (student.studentNumber === this.login && student.password === this.password) {
        this.sessionService.storeCurrentUser(student);
        window.location.href = '/menu-student';
      }
    });
    if (!this.sessionService.isLoggedIn()) {
      console.log('log in error');
    }
  }

}
