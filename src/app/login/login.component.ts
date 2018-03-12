import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { routerTransition } from '../animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition],
  host: {'[@routerTransition]': ''}
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
