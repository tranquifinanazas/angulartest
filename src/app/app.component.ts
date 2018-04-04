import { Component } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private userService: UserService) { }

  ngOnInit(){
    this.getAllUsers();
  }

  allUsers: User[];

  // Get all users
  getAllUsers(): void {
    this.userService.getAllUsers()
        .subscribe(allUsers => this.allUsers = allUsers);
  }

}
