import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {assertNumber} from '@angular/core/src/render3/assert';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  sexe = ['Homme', 'Femme', 'Autre'];
  filiere = ['SI', 'ELEC', 'BAT', 'GE', 'GB'];

  public profilForm: FormGroup;


  constructor(public formBuilder: FormBuilder, public studentService: UserService) {
    this.profilForm = this.formBuilder.group({
      mail: new FormControl('', [Validators.email, Validators.required]),
      mdp: new FormControl(''),
      nom: new FormControl(''),
      prenom: new FormControl(''),
      birthday: new FormControl(''),
      sexe: new FormControl(''),
      nationalite: new FormControl(''),
      adresse: new FormControl(''),
      ville: new FormControl(''),
      codePostal: new FormControl(''),
      tel: new FormControl(''),
      numetudiant: new FormControl('',[Validators.pattern('[0-9]*')]),
      filiere: new FormControl(''),
    });
  }


  ngOnInit() {
  }

}
