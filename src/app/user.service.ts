import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-users';


@Injectable()
export class UserService {

  activeUsers = [];
  inactiveUsers = [];
  
  constructor() { }

  getAllUsers(): User[] {
    return USERS;
  }

  getActiveUsers(): Array<Object>[] {
    for(let user of USERS){
      if (user.isActive){
        this.activeUsers.push(user);
      }
    }
    return this.activeUsers;
  }

  getInactiveUsers(): Array<Object>[] {
    for(let user of USERS){
      if (!user.isActive){
        this.inactiveUsers.push(user);
      }
    }
    return this.inactiveUsers;
  }


}
