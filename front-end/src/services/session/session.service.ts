import {Inject, Injectable, OnDestroy} from '@angular/core';
import {SESSION_STORAGE, StorageService} from 'angular-webstorage-service';

import {User} from '../../models/User.model';
import {Router} from '@angular/router';

// key that is used to access the data in local storage
const STORAGE_KEY = 'currentUser';

@Injectable({
  providedIn: 'root'
})

export class SessionService implements OnDestroy {


  constructor(@Inject(SESSION_STORAGE) private storage: StorageService, private router: Router) {
  }


  public storeCurrentUser(user: User): void {
    let currentUser: string;
    currentUser = JSON.stringify(user);
    sessionStorage.setItem(STORAGE_KEY, currentUser); // insert updated user to local storage
    console.log(sessionStorage.getItem(STORAGE_KEY) || 'Session storage is empty');
  }

  public flushCurrentUser() {
    sessionStorage.setItem(STORAGE_KEY, '');
  }

  public logOut() {
    this.flushCurrentUser();
    this.router.navigateByUrl('/RefrshComponent', {skipLocationChange: true}).then(() =>
      this.router.navigate(['/connexion']));
  }

  public getCurrentUser() {
    return sessionStorage.getItem(STORAGE_KEY) || '';
  }

  public getCurrentUserModel(): User {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY)) || '';
  }

  public isLoggedIn(): boolean {
    const currentUser = sessionStorage.getItem(STORAGE_KEY) || '';
    return !!currentUser;
  }


  ngOnDestroy() {
    sessionStorage.clear();
  }

  isAdmin(): boolean {
    if (this.isLoggedIn()) {
      return (this.getCurrentUserModel().studentNumber === 'admin');
    }
    return false;
  }

  isAdminPinna(): boolean {
    if (this.isLoggedIn()) {
      return (this.getCurrentUserModel().studentNumber === 'AMPinna');
    }
    return false;
  }


}
