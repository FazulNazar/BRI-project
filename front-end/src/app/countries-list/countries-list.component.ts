import {Component, Injectable, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {UniversityModel} from '../../models/University.model';
import {UniversityService} from '../../services/university.service';


@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css'],
})
export class CountriesListComponent implements OnInit {


  university$: Observable<UniversityModel[]>;
  // @Input() university: UniversityModel;
  public universityList: UniversityModel[];
  searchterm: string;

  constructor(public universityService: UniversityService) {
    // this.universityService.university$.subscribe((university) => {
    //   this.universityList = university;
    // });


  }

  ngOnInit() {

    // this.university$ = this.universityService.university$;
    // this.universityList = this.universityService.universityList;
    this.getUniversities();
  }

  getUniversities(): void {
    this.universityService.getUniversities()
      .subscribe(universities => {
        this.universityList = universities;
      });
  }

}

