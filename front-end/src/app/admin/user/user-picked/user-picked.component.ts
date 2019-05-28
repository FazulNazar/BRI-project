import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../../services/user.service';
import {User} from '../../../../models/User.model';
import {WishModel} from '../../../../models/Wish.model';
import {WishService} from '../../../../services/wish.service';
import {SessionService} from '../../../../services/session/session.service';
import * as jsPDF from 'jspdf';
import {FormGroup} from "@angular/forms";


@Component({
  selector: 'app-user-picked',
  templateUrl: './user-picked.component.html',
  styleUrls: ['./user-picked.component.css']
})
export class UserPickedComponent implements OnInit {
  @ViewChild('content') content: ElementRef;

  user: User;
  public wishList: WishModel[] = [];
  private isAdmin: boolean;
  private isAdminPinna: boolean;
  private isConnected: boolean;


  constructor(private route: ActivatedRoute, private userService: UserService, private  wishService: WishService,
              private sessionService: SessionService) {
  }

  ngOnInit() {
    this.getUserById();
    this.getWishes();
    this.user = this.sessionService.getCurrentUserModel();
    this.isAdmin = this.sessionService.isAdmin();
    this.isAdminPinna = this.sessionService.isAdminPinna();
    this.isConnected = this.sessionService.isLoggedIn();

  }

  getUserById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.userService.getStudentById(id)
      .subscribe(user => this.user = user);
  }

  getWishes(): void {
    this.wishService.getWishList()
      .subscribe(wishes => {
        this.wishList = wishes;
      });
  }

  public downloadPDF() {
    const doc = new jsPDF('landcape');
    doc.text('Récapitulatif', 90, 20) ;
    doc.setTextColor(76,153,0);

    const specialElementHandlers = {
      '#editor'(element, renderer) {
        return true;
      }
    };

    const content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML, 5, 5, {
      width: 800,
      elementHandlers: specialElementHandlers
    });
    doc.save('dossier.pdf');
  }

  public parseCourse(course: string) {
    return this.wishService.parseCourses(course);
  }

  transferToAccepted() {


    if (confirm("Vous êtes sur le point de valider le dossier de " + this.user.name.toUpperCase() + " " + this.user.firstname + " voulez vous poursuivre ?")) {
      const tmpUser = new User(this.user.mail,
        this.user.password,
        this.user.name,
        this.user.firstname,
        this.user.birthday,
        this.user.gender,
        this.user.nationality,
        this.user.address,
        this.user.zip,
        this.user.city,
        this.user.phone,
        this.user.studentNumber,
        this.user.educationStream,
        this.user.status,
        this.user.id,
        'true');

      this.userService.updateStudent(tmpUser as User);

    }
  }


    rejectApplication() {
      if (confirm("Vous êtes sur le point de rejeter le dossier de " +  this.user.name.toUpperCase() + " " + this.user.firstname + " voulez vous poursuivre ? Il ne sera plus accessible")) {

        const tmpUser = new User(this.user.mail,
          this.user.password,
          this.user.name,
          this.user.firstname,
          this.user.birthday,
          this.user.gender,
          this.user.nationality,
          this.user.address,
          this.user.zip,
          this.user.city,
          this.user.phone,
          this.user.studentNumber,
          this.user.educationStream,
          this.user.status,
          this.user.id,
          'rejected');

        this.userService.updateStudent(tmpUser as User);

      }
    }
  }



