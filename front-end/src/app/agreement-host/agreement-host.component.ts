import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UniversityModel} from '../../models/University.model';
import {UniversityService} from '../../services/university.service';
import {WishService} from '../../services/wish.service';
import {WishModel} from '../../models/Wish.model';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/User.model';
import {SessionService} from '../../services/session/session.service';


@Component({
  selector: 'app-agreement-host',
  templateUrl: './agreement-host.component.html',
  styleUrls: ['./agreement-host.component.css']
})
export class AgreementHostComponent implements OnInit {

  private fieldArray: Array<any> = [];
  private newAttribute: any = {};
  private wishList: WishModel[] = [];
  semester = ['semestre 1', 'semestre 2', 'toute l\'année'];
  university: UniversityModel;
  // private isNewWish = false;
  user: User;

  public agreementForm: FormGroup;

  constructor(private route: ActivatedRoute, public formBuilder: FormBuilder,
              private universityService: UniversityService, private wishService: WishService,private sessionService: SessionService) {
    this.agreementForm = this.formBuilder.group({
      semester: new FormControl(''),
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
    // const semesterValue = this.agreementForm.get(this.semester).value;
    // const semesterValue = this.agreementForm.getRawValue();
    const semesterValue = '1';
    const id = +this.route.snapshot.paramMap.get('id');
    const bool = false;
    // const wish = new WishModel(1, id, this.semester, false);
    this.wishService.postWish({
      id: 1,
      universityId: id,
      semester: semesterValue,
      agreementCompleted: bool
    } as WishModel).subscribe(newWish => {
      this.wishList.push(newWish);
    });
  //  this.wishService.getWishByHttp();

  }

  // editWish(isNew: boolean) {
  //   //   this.isNewWish = isNew;
  //   //   const bool = true;
  //   //   const semesterValue = '2';
  //   //   const id = +this.route.snapshot.paramMap.get('id');
  //   //   this.wishService.putWish(
  //   //     {
  //   //       id: 1,
  //   //       universityId: id,
  //   //       semester: semesterValue,
  //   //       agreementCompleted: bool
  //   //     } as WishModel).subscribe();
  //   // }

  addFieldValue() {
    this.fieldArray.push(this.newAttribute);
    this.newAttribute = {};
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }
}
