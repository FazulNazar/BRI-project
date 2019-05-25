import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../../services/session/session.service';

@Component({
  selector: 'app-menu-student',
  templateUrl: './menu-student.component.html',
  styleUrls: ['./menu-student.component.css']
})
export class MenuStudentComponent implements OnInit {

  title = 'SEJOUR D\'ETUDES';
  isConnected: boolean;

  constructor(private sessionService: SessionService) { }
  ngOnInit() {
    this.isConnected = this.sessionService.isLoggedIn();
  }

  logout() {
    this.isConnected = false;
    this.sessionService.flushCurrentUser();
    window.location.href = '/presentation';
  }

}
