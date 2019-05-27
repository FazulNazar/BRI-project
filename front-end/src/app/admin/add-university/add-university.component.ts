import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { UniversityService } from '../../../services/university.service';
import { UniversityModel } from '../../../models/University.model';

@Component({
  selector: 'app-add-university',
  templateUrl: './add-university.component.html',
  styleUrls: ['./add-university.component.css'],
  providers: [ UniversityService ]

})
export class AddUniversityComponent implements OnInit {

  note = ['☆', '☆☆', '☆☆☆', '☆☆☆☆', '☆☆☆☆☆'];

  public universityForm: FormGroup;
  public universityList: UniversityModel[] = [];


  constructor(public formBuilder: FormBuilder, public universityService: UniversityService) {

    this.universityForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      majors: new FormControl('', [Validators.required]),
      agreements: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      exchangeStudents: new FormControl('', [Validators.required]),
      note: new FormControl('', [Validators.required]),
      website: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
  }

  addUniversity() {
    if (this.universityForm.valid) {
      // const university = this.universityForm.getRawValue();
      const formValue = this.universityForm.value;
      this.universityService.postUniversity(
        {
          name: formValue.name,
          city: formValue.city,
          majors: formValue.majors,
          agreements: formValue.agreements,
          country: formValue.country,
          id: 1,
          universityId: 0,
          exchangeStudents: formValue.exchangeStudents,
          note: formValue.note,
          website: formValue.website,
          image: '../../../assets/world-travel.png',
          description: formValue.description,
        } as UniversityModel).subscribe(newUniversity => {
        this.universityList.push(newUniversity);
      });
      // this.getUniversities();
    }
  }

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
