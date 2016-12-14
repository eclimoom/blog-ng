import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from "../user";
import {UserService} from "../user.service";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
})
export class LoginComponent implements OnInit {

  user:User = new User();

  constructor(private userService:UserService,
              private authService:AuthService,
              private router:Router) { }

  ngOnInit() {
  }

  onLogin(){
    let user = this.user;
    this.userService.login(user.username,user.password).subscribe(
      res =>{
        console.log(res);
        let user = res.user;
        this.authService.setUser(user);
        let token = res.id;
        this.authService.setToken(token);

        //now redirect to main
        this.router.navigate(['/home']);
      },
      err =>{
        console.log(err);
    })

  }

}
