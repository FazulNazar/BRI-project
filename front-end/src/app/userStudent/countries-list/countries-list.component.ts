import {Component, OnInit} from '@angular/core';
import {UniversityModel} from '../../../models/University.model';
import {UniversityService} from '../../../services/university.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css'],
})
export class CountriesListComponent implements OnInit {

  public universityList: UniversityModel[];
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
      });
  }

}

