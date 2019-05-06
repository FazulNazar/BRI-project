import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UniversityService } from '../../services/university.service';
import { UniversityModel } from '../../models/University.model';

declare var M: any;

@Component({
  selector: 'app-add-university',
  templateUrl: './add-university.component.html',
  styleUrls: ['./add-university.component.css'],
  providers: [ UniversityService ]

})
export class AddUniversityComponent implements OnInit {

  constructor(private universityService: UniversityService) {
  }

  ngOnInit() {
  }

  addUniversity(form?: NgForm) {
    console.log(form.value);
    this.universityService.postUniversity(form.value);
      // .subscribe(res => {this.resetForm(form);
      //                    M.toast({html: 'Save successfully'});
      //   });
  }


  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    //  this.universityService.selectedUniversity = new UniversityModel();
    }
  }

}
