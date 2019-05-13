import {Component, OnInit} from '@angular/core';
import {SessionService} from '../../services/session/session.service';
import {User} from '../../models/User.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update_profile.component.html',
  styleUrls: ['./update_profile.component.css']
})
export class UpdateprofileComponent implements OnInit {

  public profilForm: FormGroup;
  currentUser: User;
  test: string;


  constructor(public formBuilder: FormBuilder, private sessionService: SessionService, private studentService: UserService) {

    this.currentUser = this.sessionService.getCurrentUserModel();
    this.profilForm = this.formBuilder.group({
      mail: new FormControl(this.currentUser.mail, [Validators.email, Validators.required]),
      password: new FormControl(this.currentUser.password),
      name: new FormControl(this.currentUser.name),
      firstname: new FormControl(this.currentUser.firstname),
      birthday: new FormControl(this.currentUser.birthday),
      gender: new FormControl(this.currentUser.gender),
      nationality: new FormControl(this.currentUser.nationality),
      address: new FormControl(this.currentUser.address),
      zip: new FormControl(this.currentUser.zip),
      city: new FormControl(this.currentUser.city),
      phone: new FormControl(this.currentUser.phone),
      studentNumber: new FormControl(this.currentUser.studentNumber, [Validators.pattern('[0-9]*')]),
      educationStream: new FormControl(this.currentUser.educationStream),
    });
  }

  ngOnInit() {
    this.currentUser = this.sessionService.getCurrentUserModel();

  }

  update() {

    const user = this.profilForm.getRawValue();
    //  user.id = this.currentUser.id;
    this.studentService.updateStudent(user, this.currentUser.id);
    window.location.href = '/profile';

  }


}
