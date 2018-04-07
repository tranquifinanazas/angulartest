import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: string[];

  constructor(private userService: UserService){}

  ngOnInit() {
    this.userService.getInActiveUsers()
      .subscribe(users => this.users = users);
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }
}
