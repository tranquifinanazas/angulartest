import { Injectable } from '@angular/core';

import { User } from './user';
import { USERS } from './mock-users';

import { MessageService } from './message.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';



@Injectable()
export class UserService {

  public activeUsers = [];
  public inactiveUsers = [];
  
  constructor(private messageService: MessageService) { }

  getAllUsers(): Observable<User[]> {
    this.messageService.add('User message: fetched all users')
    return of(USERS);
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

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }
  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }


}
