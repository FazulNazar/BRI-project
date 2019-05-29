import {Pipe, PipeTransform} from '@angular/core';

import {User} from "../models/User.model";

@Pipe({
  name: 'ApplicationsFilter'
})

export class ApplicationsFilterPipe implements PipeTransform {

  transform(userList: User[], option: string): User[] {
    console.log('Test Pipe');
    if (!userList || !option) {
      return userList;
    }
    switch (option) {
      case "En attente" : {
        return userList.filter(user =>
          user.accepted == "false" || user.accepted == null
        );
      }

      case "Validés" : {
        return userList.filter(user =>
          user.accepted == "true"
        );
      }

      case "Refusés" : {
        return userList.filter(user =>
          user.accepted == "rejected"
        );
      }

      case "Tous" : {
        return userList
       ;
      }

    }




  }
}
