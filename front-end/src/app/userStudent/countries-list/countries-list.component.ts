import {Component, OnInit} from '@angular/core';
import {UniversityModel} from '../../../models/University.model';
import {UniversityService} from '../../../services/university.service';
import {OrderModule, OrderPipe} from 'ngx-order-pipe';
import {WishService} from '../../../services/wish.service';
@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css'],
})
export class CountriesListComponent implements OnInit {

  public universityList: UniversityModel[];
  public orderedUniv: UniversityModel[];
  Country: string;
  Name: string;
  Major: string;
  Agreement: string;


  constructor(public universityService: UniversityService, public wishService: WishService) {}

  ngOnInit() {
    this.wishService.setCourses('');
    this.wishService.setDiploma('');
    this.wishService.setSemester('');
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

