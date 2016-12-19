import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Observable } from 'rxjs';
import {Post} from './post';
import {AuthService} from "../user/auth.service";
import {User} from "../user/user";

@Injectable()
export class PostService {

  constructor(private http:Http,private authService:AuthService) { }

  headers = new Headers({
    "Content-Type":"application/json"
  });

  serverUrl = "http://0.0.0.0:3000/api";


  getAll(): Observable<Post[]>{
    let url = this.serverUrl+"/posts";
    return this.http.get(url,{headers:this.headers}).map(res => res.json()).catch(err =>{
        return Observable.throw(err);
      });
  }

  getById(id:string):Observable<Post>{
    let url = this.serverUrl+`/posts/${id}`;
    return this.http.get(url,{headers:this.headers})
      .map(res => res.json())
      .catch(
        err =>{return Observable.throw(err);}
      );
  }

  getPosts(filter:string):Observable<Post[]>{
    //now we  pass the filter to query
    let url = this.serverUrl+"/post";
    if(filter){
      url = url +"?filter="+filter;
    }
    return this.http.get(url,{headers:this.headers})
      .map(res => res.json())
      .catch(
        err =>{return Observable.throw(err);}
      );
  }

  createPost(post:Post):Observable<any>{
    let user = this.authService.getCurrentUser as User;
    let userId = user.id;
    let url = this.serverUrl + "/accounts/"+userId+"/posts";
    return this.http.get(url,{headers:this.headers})
      .map(res => res.json())
      .catch(
        err =>{return Observable.throw(err);}
      );
  }



}
