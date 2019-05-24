import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {assertNumber} from '@angular/core/src/render3/assert';
import {User} from '../../models/User.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  gender = ['Homme', 'Femme', 'Autre'];
  educationStream = ['SI', 'ELEC', 'BAT', 'GE', 'GB'];

  public profilForm: FormGroup;
  public profilList: User[] = [];


  constructor(public formBuilder: FormBuilder, public userService: UserService) {
    this.userService.students$.subscribe((students) => this.profilList = students);
    // this.userService.getStudent();

    this.profilForm = this.formBuilder.group({
      mail: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl(''),
      name: new FormControl(''),
      firstname: new FormControl(''),
      birthday: new FormControl(''),
      gender: new FormControl(''),
      nationality: new FormControl(''),
      address: new FormControl(''),
      zip: new FormControl(''),
      city: new FormControl(''),
      phone: new FormControl(''),
      studentNumber: new FormControl('', [Validators.pattern('[0-9]*')]),
      educationStream: new FormControl(''),
    });
    // this.studentService.userSubject.
  }

  onSubmitForm() {
    if (this.profilForm.valid) {
      const user = this.profilForm.getRawValue();
      this.userService.addStudent(user as User);
      this.userService.getStudent();
      this.userService.students$.subscribe((students) => this.profilList = students);
    }
  }


  ngOnInit() {
  }

}
