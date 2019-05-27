import {Component, OnInit} from '@angular/core';
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
  currentUser: User;
  adminPassword = 'briadmin';
  adminPassword2 = 'ampinna';
  logError = false;
  admin: User = new User('', this.adminPassword, '', '', '', '', '', '', '', '', '', 'admin', '', '', 0, 'false');
  AMPinna: User = new User('', this.adminPassword2, '', '', '', '', '', '', '', '', '', 'AMPinna', '', '', 1 ,'false');

  constructor(private userService: UserService, private sessionService: SessionService) {
    this.userService.students$.subscribe((students) => this.user = students);
    this.userService.getStudent();
  }


  /** Fonction permettant de stocker les utilisateur (du back) dans la liste user [] */
  getUser(): void {
    this.userService.students$.subscribe((students) => this.user = students);
    this.userService.getStudent();
  }

  ngOnInit() {
    if (this.sessionService.getCurrentUserModel()) {
      window.location.href = '/profile';
    }
    this.getUser();
    this.logError = false;
  }

  onSubmitForm() {

    if (this.login === 'AMPinna' && this.password === this.adminPassword2) {
      this.sessionService.storeCurrentUser(this.AMPinna);
      this.currentUser = this.sessionService.getCurrentUserModel();
      window.location.href = '/admin-pinna';
    }

    if (this.login === 'admin' && this.password === this.adminPassword) {
      this.sessionService.storeCurrentUser(this.admin);
      this.currentUser = this.sessionService.getCurrentUserModel();
      window.location.href = '/menu-admin';
    }
    this.user.forEach(student => {
      if (student.studentNumber === this.login && student.password === this.password) {
        this.sessionService.storeCurrentUser(student);
        this.currentUser = this.sessionService.getCurrentUserModel();
        window.location.href = '/menu-student';
      }
    });
    if (!this.sessionService.isLoggedIn()) {
      console.log('log in error');
      this.logError = true;

    }
  }


}
