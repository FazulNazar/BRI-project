import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User.model';
import {SessionService} from '../../services/session/session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;


  constructor(private sessionService: SessionService) {
  }

  ngOnInit() {
    this.user = this.sessionService.getCurrentUserModel();
  }

  logout() {
    this.sessionService.flushCurrentUser();
    this.user = this.sessionService.getCurrentUserModel();
    window.location.href = '/presentation';

  }


}
