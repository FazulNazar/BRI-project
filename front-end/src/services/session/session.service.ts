import { Inject, Injectable, OnDestroy } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

import { User } from '../../models/User.model';

// key that is used to access the data in local storage
const STORAGE_KEY = 'currentUser';

@Injectable({
  providedIn: 'root'
})

export class SessionService implements OnDestroy {

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {}

  public storeCurrentUser(user: User): void {
    let currentUser: string;
    currentUser = JSON.stringify(user);
    sessionStorage.setItem(STORAGE_KEY, currentUser); // insert updated user to local storage
    console.log(sessionStorage.getItem(STORAGE_KEY) || 'Session storage is empty');
  }

  public flushCurrentUser() {
    sessionStorage.setItem(STORAGE_KEY, '');
  }

  public getCurrentUser() {
    return sessionStorage.getItem(STORAGE_KEY) || '';
  }

  public isLoggedIn(): boolean {
    const currentUser = sessionStorage.getItem(STORAGE_KEY) || '';
    return !!currentUser;
  }

  ngOnDestroy() {
    sessionStorage.clear();
  }
}
