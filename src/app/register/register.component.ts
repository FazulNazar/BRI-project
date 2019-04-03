import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  sexe = ['Homme', 'Femme', 'Autre'];
  filiere = ['SI', 'ELEC', 'BAT', 'GE', 'GB' ]

  profilForm = new FormGroup({
    mail: new FormControl(''),
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
    numetudiant: new FormControl(''),
    filiere: new FormControl(''),

  });


  ngOnInit() {
  }

}
