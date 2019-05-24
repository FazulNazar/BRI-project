import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User.model';
import {SessionService} from '../../services/session/session.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;


  constructor(private sessionService: SessionService, private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getStudent();
    this.user = this.sessionService.getCurrentUserModel();
  }

  logout() {
    this.sessionService.flushCurrentUser();
    this.user = this.sessionService.getCurrentUserModel();
    window.location.href = '/presentation';

  }


}
