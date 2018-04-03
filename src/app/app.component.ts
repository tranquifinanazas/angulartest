import { Component } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-users';
import { all } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allUsers = USERS;
  activeUsers = [];
  inactiveUsers = [];

  ngOnInit(){
    this.sortUsers();
  }

  sortUsers(): void {
    for (const user of this.allUsers) {
      if (user.isActive) {
        this.activeUsers.push(user.name)
      }
      else{
        this.inactiveUsers.push(user.name)
      }
    }
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
