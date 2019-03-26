import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule, Routes} from '@angular/router';
import { PresentationComponent } from './presentation/presentation.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { MenuStudentComponent } from './menu-student/menu-student.component';
import { StudiesComponent } from './studies/studies.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
  { path: 'presentation', component: PresentationComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'auth', component: AuthFormComponent},
  { path: '', component: PresentationComponent},
  { path: 'auth/menu-student', component: MenuStudentComponent},

  { path: '', component: PresentationComponent},
  { path: 'studies', component: StudiesComponent},
  { path: '', component: PresentationComponent},
  { path: 'register', component: RegisterComponent}
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
    StudiesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
