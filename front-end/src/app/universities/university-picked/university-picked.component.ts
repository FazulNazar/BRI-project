import {Component, Input, OnInit} from '@angular/core';
import {UniversityModel} from '../../../models/University.model';
import {UniversityService} from '../../../services/university.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-university-picked',
  templateUrl: './university-picked.component.html',
  styleUrls: ['./university-picked.component.css']
})
export class UniversityPickedComponent implements OnInit {

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
}
