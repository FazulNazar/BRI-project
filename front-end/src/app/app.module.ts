import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { PresentationComponent } from './presentation/presentation.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { MenuStudentComponent } from './menu-student/menu-student.component';
import { StudiesComponent } from './studies/studies.component';
import { RegisterComponent } from './register/register.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UpdateprofileComponent} from './update-profile/update_profile.component';
import {ProfileComponent} from './profile/profile.component';
import {UniversityPickedComponent} from './universities/university-picked/university-picked.component' ;
import {UniversityAvailableComponent} from './universities/university-available/university-available.component' ;
import { UniversityPreviewComponent } from './universities/university-preview/university-preview.component';
import { AgreementHostComponent } from './agreement-host/agreement-host.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { DocumentComponent } from './document/document.component';
import { AddUniversityComponent } from './add-university/add-university.component';

import {UserService} from '../services/user.service';
import {UniversityService} from '../services/university.service';
import {WishService} from '../services/wish.service';
import {CountryFilterPipe} from './filter-country.pipe';
import { StorageServiceModule } from 'angular-webstorage-service';
import {NameFilterPipe} from './filter-name.pipe';
import {MajorFilterPipe} from './filter-major.pipe';
import {AgreementFilterPipe} from './filter-agreement.pipe';
import {ContactComponent} from './Contact/Contact-component';



const appRoutes: Routes = [
  { path: 'presentation', component: PresentationComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'auth', component: AuthFormComponent},
  { path: '', component: PresentationComponent},
  { path: 'menu-student', component: MenuStudentComponent},
  { path: 'menu-admin', component: MenuAdminComponent},
  { path: 'menu-admin/add-university', component: AddUniversityComponent},
  { path: 'menu-student/countries-list', component: CountriesListComponent},
  { path: 'menu-student/wish-list', component: WishListComponent},
  { path: '', component: PresentationComponent},
  { path: 'studies', component: StudiesComponent},
  { path: '', component: PresentationComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'update-profile', component: UpdateprofileComponent},
  { path: 'profile', component: ProfileComponent},
  {path: 'university-picked/:id', component: UniversityPickedComponent},
  {path: 'university-available', component: UniversityAvailableComponent},
  {path: 'menu-student/documents', component: DocumentComponent},
  {path: 'agreement-host/:id', component: AgreementHostComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PresentationComponent,
    ConnexionComponent,
    AuthFormComponent,
    MenuStudentComponent,
    AuthFormComponent,
    RegisterComponent,
    AuthFormComponent,
    StudiesComponent,
    MenuAdminComponent,
    UpdateprofileComponent,
    ProfileComponent,
    CountriesListComponent,
    WishListComponent,
    CountriesListComponent,
    UniversityPickedComponent,
    UniversityAvailableComponent,
    DocumentComponent,
    AppComponent,
    AddUniversityComponent,
    UniversityPreviewComponent,
    AgreementHostComponent,
    CountryFilterPipe,
    NameFilterPipe,
    MajorFilterPipe,
    AgreementFilterPipe,
    ContactComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StorageServiceModule,
  ],
  providers: [
    UserService,
    UniversityService,
    WishService,
  ],
  bootstrap: [AppComponent]

})
export class AppModule {
}
