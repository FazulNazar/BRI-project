import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule, Routes} from '@angular/router';
import { PresentationComponent } from './presentation/presentation.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { MenuStudentComponent } from './menu-student/menu-student.component';
import { StudiesComponent } from './studies/studies.component';
import { RegisterComponent } from './register/register.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import {UpdateprofileComponent} from './update-profile/update_profile.component';
import {ProfileComponent} from './profile/profile.component';

import { CountriesListComponent } from './countries-list/countries-list.component';
import { WishListComponent } from './wish-list/wish-list.component';



import {UserService} from '../services/user.service';


const appRoutes: Routes = [
  { path: 'presentation', component: PresentationComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'auth', component: AuthFormComponent},
  { path: '', component: PresentationComponent},
  { path: 'auth/menu-student', component: MenuStudentComponent},
  { path: 'menu-admin', component: MenuAdminComponent},
  { path: 'auth/menu-student/countries-list', component: CountriesListComponent},
  { path: 'auth/menu-student/wish-list', component: WishListComponent},
  { path: '', component: PresentationComponent},
  { path: 'studies', component: StudiesComponent},
  { path: '', component: PresentationComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'update-profile', component: UpdateprofileComponent},
  { path: 'profile', component: ProfileComponent}
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
    WishListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [
    UserService,
  ],
  bootstrap: [AppComponent]

})
export class AppModule {
}
