import { Component } from '@angular/core';
import {User} from "./user/user";
import {AuthService} from "./user/auth.service";
import {UserService} from "./user/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent {

  user:User = new User();
  loggedIn: boolean = false;

  constructor(private authService:AuthService,private userService:UserService){

    this.user = this.authService.getCurrentUser();
    if(this.user){
      this.loggedIn = true;
    }
  }

  logout(){
    this.userService.logout().subscribe(
      res =>{
        console.log(res);
      },
      err =>{
        console.log(err);
      })
  }

}
