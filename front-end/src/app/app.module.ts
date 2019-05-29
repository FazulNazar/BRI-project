import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { PresentationComponent } from './presentation/presentation.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { MenuStudentComponent } from './userStudent/menu-student/menu-student.component';
import { StudiesComponent } from './studies/studies.component';
import { RegisterComponent } from './register/register.component';
import { MenuAdminComponent } from './admin/menu-admin/menu-admin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UpdateprofileComponent} from './userStudent/update-profile/update_profile.component';
import {ProfileComponent} from './userStudent/profile/profile.component';
import {UniversityPickedComponent} from './universities/university-picked/university-picked.component' ;
import {UniversityAvailableComponent} from './universities/university-available/university-available.component' ;
import { UniversityPreviewComponent } from './universities/university-preview/university-preview.component';
import { AgreementHostComponent } from './agreement-host/agreement-host.component';
import { CountriesListComponent } from './userStudent/countries-list/countries-list.component';
import { WishListComponent } from './userStudent/wish-list/wish-list.component';
import { DocumentComponent } from './userStudent/document/document.component';
import { AddUniversityComponent } from './admin/add-university/add-university.component';

import {UserService} from '../services/user.service';
import {UniversityService} from '../services/university.service';
import {WishService} from '../services/wish.service';
import {CountryFilterPipe} from './filter-country.pipe';
import { StorageServiceModule } from 'angular-webstorage-service';
import {NameFilterPipe} from './filter-name.pipe';
import {MajorFilterPipe} from './filter-major.pipe';
import {AgreementFilterPipe} from './filter-agreement.pipe';
import {AdminNameFilterPipe} from './filter-admin-name.pipe';
import {ContactComponent} from './Contact/Contact-component';
import { ApplicationsComponent} from './admin/applications/applications.component';
import { UserPickedComponent} from './admin/user/user-picked/user-picked.component';
import {AdminNumberFilterPipe} from './filter-admin-NumEtu.pipe';
import {AdminMajorFilterPipe} from './filter-admin-major.pipe';
import { AcceptedComponent } from './admin/accepted/accepted.component';
import { AdminPinnaComponent } from './admin/admin-pinna/admin-pinna.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {AcceptedFilterPipe} from './filter-accepted';
import {ApplicationsFilterPipe} from './filter-applications';



import {RelevenoteComponent} from './userStudent/document/relevenote/relevenote.component';
import { UniversitiesListComponent } from './admin/universities-list/universities-list.component';
import { UniversityDetailsComponent } from './admin/university-details/university-details.component';
import {OrderModule} from 'ngx-order-pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const appRoutes: Routes = [
  { path: 'presentation', component: PresentationComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: '', component: PresentationComponent},
  { path: 'menu-student', component: MenuStudentComponent},
  { path: 'menu-admin', component: MenuAdminComponent},
  { path: 'menu-admin/add-university', component: AddUniversityComponent},
  { path: 'menu-student/countries-list', component: CountriesListComponent},
  { path: 'menu-admin/universities-list', component: UniversitiesListComponent},
  { path: 'menu-student/wish-list', component: WishListComponent},
  { path: 'studies', component: StudiesComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'update-profile', component: UpdateprofileComponent},
  { path: 'profile', component: ProfileComponent},
  {path: 'university-picked/:id', component: UniversityPickedComponent},
  {path: 'university-details/:id', component: UniversityDetailsComponent},
  {path: 'university-available', component: UniversityAvailableComponent},
  {path: 'menu-student/documents', component: DocumentComponent},
  {path: 'agreement-host/:id', component: AgreementHostComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'applications', component: ApplicationsComponent},
  {path: 'accepted' , component: AcceptedComponent},
  {path: 'user-picked/:id', component: UserPickedComponent},
  {path: 'admin-pinna', component: AdminPinnaComponent},
  {path: 'relevenote', component: RelevenoteComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PresentationComponent,
    ConnexionComponent,
    MenuStudentComponent,
    RegisterComponent,
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
    AddUniversityComponent,
    UniversityPreviewComponent,
    AgreementHostComponent,
    CountryFilterPipe,
    NameFilterPipe,
    MajorFilterPipe,
    AgreementFilterPipe,
    ContactComponent,
    UserPickedComponent,
    ApplicationsComponent,
    AdminNameFilterPipe,
    AdminNumberFilterPipe,
    AdminMajorFilterPipe,
    AcceptedComponent,
    AdminPinnaComponent,
    AcceptedFilterPipe,
    ApplicationsFilterPipe,
    RelevenoteComponent,
    UniversitiesListComponent,
    UniversityDetailsComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StorageServiceModule,
    PdfViewerModule,
    OrderModule,
    BrowserAnimationsModule,


  ],
  providers: [
    UserService,
    UniversityService,
    WishService,
    PdfViewerModule,
  ],
  bootstrap: [AppComponent]

})
export class AppModule {
}
