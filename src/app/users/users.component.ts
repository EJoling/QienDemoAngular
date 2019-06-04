import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private users: User[]; //a field containing anm araay of User with name users

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.list().subscribe(data => {
      this.users = data;
    })
  }

}
