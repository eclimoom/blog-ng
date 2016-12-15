import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {PostService} from '../post.service';
import {Post} from '../post';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[PostService]
})
export class ListComponent implements OnInit {

  private list:Array<any>=[];
  private maxSize:number = 5;
  private itemsPerPage:number=5;
  private totalItems:number = 15;
  private currentPage:number = 1;

  private firstText:string="首页";
  private lastText:string="尾页";
  private previousText:string="上一页";
  private nextText:string="下一页";

  posts:Post[] = [];


  constructor(private router: Router,
              private postService:PostService) {

  }


  ngOnInit() {
    //do request and get all blog entries
    this.postService.getAll().subscribe(res => {
      this.list= res;
    },err =>{
      console.log(err);
    })

  }

  public setPage(pageNo:number):void {
  };

  public pageChanged(event:any):void {
    this.list=this.list.reverse();
  };

  private gotoWrite():void{
    //没有登录，调往登录页，已登录，跳往写作页
    this.router.navigateByUrl("user/write");
  }


}
