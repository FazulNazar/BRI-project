import { Component, OnInit } from '@angular/core';
import {UniversityModel} from '../../../models/University.model';
import {ActivatedRoute} from '@angular/router';
import {UniversityService} from '../../../services/university.service';

@Component({
  selector: 'app-university-details',
  templateUrl: './university-details.component.html',
  styleUrls: ['./university-details.component.css']
})
export class UniversityDetailsComponent implements OnInit {

  university: UniversityModel;

  constructor(private route: ActivatedRoute, private universityService: UniversityService) {}

  ngOnInit() {
    this.getUniversity();
  }

  getUniversity(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.universityService.getUniversity(id)
      .subscribe(university => this.university = university);
  }

  deleteUniversity() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (confirm('Vous êtes sûr de vouloir le supprimer ?')) {
      this.universityService.deleteUniversity(id)
        .subscribe(wishes => {
          this.getUniversity();
        });
    }
  }
}
