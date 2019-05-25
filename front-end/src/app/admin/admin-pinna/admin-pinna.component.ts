import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../../services/session/session.service';

@Component({
  selector: 'app-admin-pinna',
  templateUrl: './admin-pinna.component.html',
  styleUrls: ['./admin-pinna.component.css']
})
export class AdminPinnaComponent implements OnInit {
  title = 'DOSSIERS';
  isAdmin: boolean;

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    this.isAdmin = this.sessionService.isAdminPinna();
  }

}
