import {Component, OnInit} from '@angular/core';
import {SessionService} from '../../services/session/session.service';
import {User} from '../../models/User.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact-component.html',
  styleUrls: ['./contact-component.css']
})
export class ContactComponent implements OnInit {

  user: User;
  isConnected: boolean;


  constructor(private sessionService: SessionService) {
  }

  ngOnInit() {
    this.isConnected = this.sessionService.isLoggedIn();
    this.user = this.sessionService.getCurrentUserModel();

  }


}
