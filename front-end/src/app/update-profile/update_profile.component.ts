import {Component, OnInit} from '@angular/core';
import {SessionService} from '../../services/session/session.service';
import {User} from '../../models/User.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {async} from '@angular/core/testing';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update_profile.component.html',
  styleUrls: ['./update_profile.component.css']
})
export class UpdateprofileComponent implements OnInit {

  public profilForm: FormGroup;
  currentUser: User;
  test: string;


  constructor(private route: ActivatedRoute, public formBuilder: FormBuilder,
              private sessionService: SessionService, private studentService: UserService) {

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
      id: this.currentUser.id,
    });
  }

  ngOnInit() {
    this.currentUser = this.sessionService.getCurrentUserModel();
    // this.getUserById();
  }

  update() {

    // const id = this.currentUser.id;
    // const id = +this.route.snapshot.paramMap.get('id');
    if (this.profilForm.valid) {
      const user = this.profilForm.getRawValue();
      this.studentService.updateStudent(user as User);
      this.sessionService.storeCurrentUser(user);
      this.currentUser = this.sessionService.getCurrentUserModel();
    }
    // window.location.href = '/profile';
  }

  // getUserById(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   console.log(id);
  //   this.studentService.getStudentById(id);
  //   this.studentService.studentViewed$.subscribe((student) => this.currentUser = student);
  //   // .subscribe(user => this.currentUser = user);
  // }


}
