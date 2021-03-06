import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  
  private user: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params["id"]; // the "+" prefix makes it a number id instead of a string id
    this.userService.findById(id).subscribe( user => {
      this.user = user;
    });
  }

  update(): void {
    this.userService.update(this.user).subscribe(updatedUser =>{
      console.log("Updated in Component: " +updatedUser.id)
    });
  }


}
