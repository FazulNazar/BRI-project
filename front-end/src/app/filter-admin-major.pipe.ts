import {Pipe, PipeTransform} from '@angular/core';
import {User} from '../models/User.model';

@Pipe({
  name: 'AdminMajorFilter'
})

export class AdminMajorFilterPipe implements PipeTransform {

  transform(userList: User[], Major: string): User[] {
    console.log('Test Pipe');
    if (!userList || !Major) {
      return userList;
    }

    return userList.filter(user =>
      user.educationStream.toLowerCase().includes(Major.toLowerCase()));
  }
}

