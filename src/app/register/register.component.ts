import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public user = {}

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  register(){
    console.log(this.user)
    this.userService.register(this.user)
    .subscribe(user=> console.log(user))
  }

}
