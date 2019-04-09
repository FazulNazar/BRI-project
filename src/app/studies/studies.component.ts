import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {
  public  studiesForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public studentService: UserService) {

    this. studiesForm = this.formBuilder.group({
      mail: new FormControl('', [Validators.email, Validators.required]),
      school: new FormControl(''),
      year: new FormControl(''),
      grade: new FormControl(''),
      locality: new FormControl(''),
      ville: new FormControl(''),
      speciality: new FormControl(''),
      mean: new FormControl(''),
    });
  }



  ngOnInit() {
  }

}
