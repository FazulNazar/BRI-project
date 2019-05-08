import {Component, OnInit} from '@angular/core';
import {SessionService} from '../../services/session/session.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  title = 'Séjour au gaidjin';
  isConnected: boolean;


  constructor(private sessionService: SessionService) {
  }

  ngOnInit() {
    this.isConnected = this.sessionService.isLoggedIn();

  }

  logout() {
    this.sessionService.flushCurrentUser();
    this.isConnected = false;
  }


}
