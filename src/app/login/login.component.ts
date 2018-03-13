import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
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

  constructor(private userService: UserService,private router: Router, private auth: AuthService) { }


  ngOnInit() {
  }

  login(){
    console.log(this.user)
    this.userService.login(this.user)
    .subscribe(res=> {
      console.log(res.token)
      this.auth.setUser(res.token)
      this.router.navigateByUrl('/')
    })
  }
}
