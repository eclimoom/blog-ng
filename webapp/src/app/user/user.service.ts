import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";


@Injectable()
export class UserService {


  headers = new Headers({
    "Content-Type":"application/json"
  });
  serverUrl = "http://0.0.0.0:3000/api";

  constructor(private http:Http,private authService:AuthService) { }

  login(username:string,password:string):Observable<any>{
    let url = this.serverUrl+'/Users/login?include=user';
    return this.http.post(url,{username:username,password:password},{headers:this.headers}).map(res => res.json()).catch(err => {
        return Observable.throw(err);
    })
  }

  logout(): Observable<any>{
    let url = this.serverUrl+'/Users/logout';
    let param = {accessTokenID:this.authService.getToken()};

    this.authService.logout();
    return this.http.post(url,param,{headers:this.headers}).map(res => res.json()).catch(err => {
      return Observable.throw(err);
    })

  }

}
