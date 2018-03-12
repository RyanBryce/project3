import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [routerTransition],
  host: {'[@routerTransition]': ''}
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
