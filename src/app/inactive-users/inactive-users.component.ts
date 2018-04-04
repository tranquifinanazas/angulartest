import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Output() userSetToActive = new EventEmitter<number>();

  constructor(private userService: UserService) { }

  inactiveUsers = [];

  ngOnInit(){
    this.inactiveUsers = this.userService.getInactiveUsers();
  }

  onSetToActive(id: number) {
    this.userSetToActive.emit(id);
  }
}
