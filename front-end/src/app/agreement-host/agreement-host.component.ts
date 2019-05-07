import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UniversityModel} from '../../models/University.model';
import {UniversityService} from '../../services/university.service';

@Component({
  selector: 'app-agreement-host',
  templateUrl: './agreement-host.component.html',
  styleUrls: ['./agreement-host.component.css']
})
export class AgreementHostComponent implements OnInit {

  private fieldArray: Array<any> = [];
  private newAttribute: any = {};

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

  addFieldValue() {
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {};
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }
}
