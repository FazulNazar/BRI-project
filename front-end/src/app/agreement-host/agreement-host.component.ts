import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UniversityModel} from '../../models/University.model';
import {UniversityService} from '../../services/university.service';
import {WishService} from '../../services/wish.service';
import {WishModel} from '../../models/Wish.model';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/User.model';
import {SessionService} from '../../services/session/session.service';
import {CourseModel} from '../../models/Course.model';


@Component({
  selector: 'app-agreement-host',
  templateUrl: './agreement-host.component.html',
  styleUrls: ['./agreement-host.component.css']
})
export class AgreementHostComponent implements OnInit {


  semester = ['semestre 1', 'semestre 2', 'toute l\'année'];
  diploma = ['Ingenieur en science informatique', 'Ingenieur en génie électrique', 'Ingenieur en génie de l\'eau',
    'Ingenieur en génie du bâtiment', 'Ingenieur en biologie'];
  university: UniversityModel;
  // private isNewWish = false;
  user: User;
  private wishList: WishModel[] = [];

  public agreementForm: FormGroup;

  courses: FormArray;

  constructor(private route: ActivatedRoute, public formBuilder: FormBuilder, private universityService: UniversityService,
              private wishService: WishService, private sessionService: SessionService) {
    this.agreementForm = this.formBuilder.group({
      semester: new FormControl(''),
      diploma: new FormControl(''),
      courses: this.formBuilder.array([this.createCourse()])
    });
  }

  ngOnInit() {
    this.getUniversity();
    this.user = this.sessionService.getCurrentUserModel();
  }

  getUniversity(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.universityService.getUniversity(id)
      .subscribe(university => this.university = university);
  }

  addWish() {
    if (this.agreementForm.valid) {
      const id = +this.route.snapshot.paramMap.get('id');
      const formValue = this.agreementForm.value;
      const jsonCourses = JSON.stringify(formValue.courses ? formValue.courses : []);
      this.wishService.postWish({
        id: 1,
        universityId: id,
        semester: formValue.semester,
        diploma: formValue.diploma,
        // courses: [{title: 'titre1', code: 1, credits: 5},
        //           {title: 'titre2', code: 2, credits: 3}],
        agreementCompleted: false,
        courses: jsonCourses
      } as WishModel).subscribe(newWish => {
        this.wishList.push(newWish);
      });
    }
  }


  createCourse(): FormGroup {
    return this.formBuilder.group({
      cours: '',
      code: '',
      credit: ''
    });
  }

  addCourse(): void {
    this.courses = this.agreementForm.get('courses') as FormArray;
    this.courses.push(this.createCourse());
  }

  deleteCourse(index) {
    this.courses.removeAt(index);
  }
}
