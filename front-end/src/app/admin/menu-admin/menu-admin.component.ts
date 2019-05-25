import {Component, OnInit} from '@angular/core';
import {SessionService} from '../../../services/session/session.service';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {
  title = 'DOSSIERS';
  isAdmin: boolean;

  constructor(private sessionService: SessionService) {
  }

  ngOnInit() {

    this.isAdmin = this.sessionService.isAdmin();
  }

}
