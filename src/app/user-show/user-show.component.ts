import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit {

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

}
