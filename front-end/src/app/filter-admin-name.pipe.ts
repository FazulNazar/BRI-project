import {Pipe, PipeTransform} from '@angular/core';
import {User} from '../models/User.model';

@Pipe({
  name: 'AdminNameFilter'
})

export class AdminNameFilterPipe implements PipeTransform {

  transform(userList: User[], Name: string): User[] {
    console.log('Test Pipe');
    if (!userList || !Name) {
      return userList;
    }

    return userList.filter(user =>
      user.name.toLowerCase().includes(Name.toLowerCase()));
  }
}

