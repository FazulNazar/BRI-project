import { Component, OnInit } from '@angular/core';
import {UniversityModel} from '../../../models/University.model';
import {UniversityService} from '../../../services/university.service';

@Component({
  selector: 'app-universities-list',
  templateUrl: './universities-list.component.html',
  styleUrls: ['./universities-list.component.css']
})
export class UniversitiesListComponent implements OnInit {

  public universityList: UniversityModel[];
  public orderedUniv: UniversityModel[];
  Country: string;
  Name: string;
  Major: string;
  Agreement: string;


  constructor(public universityService: UniversityService) {}

  ngOnInit() {
    this.getUniversities();
  }

  getUniversities(): void {
    this.universityService.getUniversities()
      .subscribe(universities => {
        this.universityList = universities;
        this.sortBy('country');
      });
  }
  sortBy(field: string) {
    this.universityList.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    this.orderedUniv = this.universityList;
  }

}
