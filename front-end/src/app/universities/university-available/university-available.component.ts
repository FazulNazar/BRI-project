import {Component, Injectable, Input, OnInit} from '@angular/core';
import {UniversityService} from '../../../services/university.service';
import {UniversityModel} from '../../../models/University.model';
import {Observable} from 'rxjs';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-university-available',
  templateUrl: './university-available.component.html',
  styleUrls: ['./university-available.component.css']
})
export class UniversityAvailableComponent implements OnInit {


  university$: Observable<UniversityModel[]>;
  // @Input() university: UniversityModel;
  public universityList: UniversityModel[];

  constructor(public universityService: UniversityService) {
    // this.universityService.university$.subscribe((university) => {
    //   this.universityList = university;
    // });
  }

  ngOnInit() {
    this.getUniversities();
    // this.university$ = this.universityService.university$;
    // this.universityList = this.universityService.universityList;
  }

  getUniversities(): void {
    this.universityService.getUniversities()
      .subscribe(universities => {
        this.universityList = universities;
      });
  }

}
