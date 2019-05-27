import {Pipe, PipeTransform} from '@angular/core';

import {User} from "../models/User.model";

@Pipe({
  name: 'AcceptedFilter'
})

export class AcceptedFilterPipe implements PipeTransform {

  transform(userList: User[]): User[] {
    console.log('Test Pipe');
    if (!userList) {
      return userList;
    }

    return userList.filter(user =>
      user.accepted == "true"
    );
  }
}
