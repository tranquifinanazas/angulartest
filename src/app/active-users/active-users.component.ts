import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private userService: UserService) { }

  activeUsers = [];

  ngOnInit(){
    this.activeUsers = this.userService.getActiveUsers();

  }

  onSetToInactive(id: number) {
    this.userSetToInactive.emit(id);
  }
}
