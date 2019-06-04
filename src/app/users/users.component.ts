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

  private users: User[]; //a field containing anm araay of User with name users
  //private id;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    //this.id = +this.route.snapshot.params["id"];
    
    this.userService.list().subscribe(data => {
      this.users = data;
    })
  }

  delete(id: Number): void {
    this.userService.delete(id).subscribe( ()=>console.log("User " + id +" Deleted in UserComponent"));
      
  }

}
