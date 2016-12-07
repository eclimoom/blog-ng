import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {PostService} from '../post.service';
import {Post} from '../post';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css','../list/list.component.css'],
  providers:[PostService]
})
export class DetailComponent implements OnInit {

  post: Post = new Post();
  constructor(private router: ActivatedRoute,private postService:PostService) { }

  ngOnInit() {

    this.router.params.switchMap((params:Params) =>{
      let id = params['id'];
      return this.postService.getById(id)
    }).subscribe(res => {
      this.post= res;
    },err =>{
      console.log(err);
    });

  }

}
