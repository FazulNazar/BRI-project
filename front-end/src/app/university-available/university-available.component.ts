import { Component, OnInit } from '@angular/core';
import {UniversityService} from '../../services/university.service';
import {UniversityModel} from "../../models/University.model";

@Component({
  selector: 'app-university-available',
  templateUrl: './university-available.component.html',
  styleUrls: ['./university-available.component.css']
})
export class UniversityAvailableComponent implements OnInit {


  public universityList: UniversityModel[] = [];

  constructor(public ticketService: UniversityService) {
    this.ticketService.university$.subscribe((tickets) => {
      this.universityList = tickets;
    });
  }
  ngOnInit() {
  }

}
