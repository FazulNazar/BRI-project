import {Component, OnInit} from '@angular/core';
import {SessionService} from '../../services/session/session.service';
import {User} from '../../models/User.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isConnected: boolean;
  currentUser: User;

  constructor(public sessionService: SessionService) {
  }

  ngOnInit() {
    this.isConnected = this.sessionService.isLoggedIn();
    this.currentUser = this.sessionService.getCurrentUserModel();
  }

  isAdmin(): boolean {
    return (this.currentUser.studentNumber === 'admin' || this.currentUser.studentNumber === 'AMPinna');
  }

}
