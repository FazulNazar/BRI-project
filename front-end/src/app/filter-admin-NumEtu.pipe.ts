import {Pipe, PipeTransform} from '@angular/core';
import {User} from '../models/User.model';

@Pipe({
  name: 'AdminNumberFilter'
})

export class AdminNumberFilterPipe implements PipeTransform {

  transform(userList: User[], num: string): User[] {
    console.log('Test Pipe');
    if (!userList || !num) {
      return userList;
    }

    return userList.filter(user =>
      user.name.toLowerCase().includes(num.toLowerCase()));
  }
}

