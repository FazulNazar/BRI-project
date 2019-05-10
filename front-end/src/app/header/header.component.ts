import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../services/session/session.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isConnected: boolean;
  constructor(private sessionService: SessionService) {}

  ngOnInit() {
    this.isConnected = this.sessionService.isLoggedIn();
  }

}
