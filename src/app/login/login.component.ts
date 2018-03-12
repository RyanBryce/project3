import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user = {}

  constructor(private userService: UserService) { }


  ngOnInit() {
  }

  login(){
    console.log(this.user)
    this.userService.login(this.user)
    .subscribe(user=> console.log(user))
  }
}
