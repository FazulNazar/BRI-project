import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {RouterModule, Routes} from '@angular/router';
import {PresentationComponent} from './presentation/presentation.component';
import {ConnexionComponent} from './connexion/connexion.component';
import {AuthFormComponent} from './auth-form/auth-form.component';
import {StudiesComponent} from './studies/studies.component';
import {RegisterComponent} from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path: 'presentation', component: PresentationComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'auth', component: AuthFormComponent},
  {path: '', component: PresentationComponent},
  {path: 'studies', component: StudiesComponent},
  {path: '', component: PresentationComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PresentationComponent,
    ConnexionComponent,
    AuthFormComponent,
    RegisterComponent,
    AuthFormComponent,
    StudiesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule {
}
