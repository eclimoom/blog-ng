import { Injectable } from '@angular/core';
import {User} from "./user";

@Injectable()
export class AuthService {

  constructor() { }

  public isLogin: boolean= localStorage.getItem('accessToken') ? true:false;

  setUser(user:User){
    let userString = JSON.stringify(user);
    localStorage.setItem('currentUser',userString);
  }

  getCurrentUser():User{
    let userString = localStorage.getItem('currentUser')
    if(!userString){
      return null;
    }else{
      let user :User = JSON.parse(userString);
      return user;
    }
  }



  setToken(token:string){
    this.isLogin = true;
    localStorage.setItem('accessToken',token);
  }

  getToken():string{
    return localStorage.getItem('accessToken');
  }
  logout(){
    this.isLogin = false;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('accessToken');
  }

}
