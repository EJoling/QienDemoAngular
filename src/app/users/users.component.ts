import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private users: User[]; //a field containing an araay of User with name users

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {

    this.userService.list().subscribe(data => {
      this.users = data;
    })
  }

  delete(id: Number): void {
    this.userService.delete(id).subscribe( ()=>console.log("User " + id +" Deleted in UserComponent"));
      
  }

}
