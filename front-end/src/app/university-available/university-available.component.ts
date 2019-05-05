import {Component, Injectable, OnInit} from '@angular/core';
import {UniversityService} from '../../services/university.service';
import {UniversityModel} from '../../models/University.model';
import {Observable} from 'rxjs';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-university-available',
  templateUrl: './university-available.component.html',
  styleUrls: ['./university-available.component.css']
})
export class UniversityAvailableComponent implements OnInit {


  university$: Observable<UniversityModel[]>;
  public universityList: UniversityModel[] = [];

  constructor(public universityService: UniversityService) {
    this.universityService.university$.subscribe((university) => {
      this.universityList = university;
    });
  }

  ngOnInit() {
    // this.university$ = this.universityService.university$;
    // this.universityList = this.universityService.universityList;
  }

}
