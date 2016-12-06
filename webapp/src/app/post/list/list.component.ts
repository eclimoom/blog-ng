import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public maxSize:number = 5;
  public itemsPerPage:number=5;
  public totalItems:number = 15;
  public currentPage:number = 1;

  public firstText:string="首页";
  public lastText:string="尾页";
  public previousText:string="上一页";
  public nextText:string="下一页";

  constructor(private router: Router,
              private route: ActivatedRoute) {

  }
  private list:Array<any>=[
    {id:"1",body:'一天上课，一女生有事跟老师请假走了，一哥们也无缘无故地跟着走了，众人奇怪。中午回来后看见他的朋友圈发了条：“今天丢人丢大了，上课时我昏昏欲睡，突然看见一同学拿包走人。我以为下课了，也拿包走人……”',createAt:'2016-11-21 10:44',nick:'eclimoom',userId:'1',read:'10',commentTimes:'2016-11-12 12:00:00'},
    {id:"2",body:'奶奶去世早，爷爷寂寞地过了十几年孤单日子。现在快90了，整天念叨不想再活了。有一天他竟弄了张“遗照”挂奶奶遗照旁边了。家人都拗不过就随他去了。一日同学来玩，看见照片问是谁，我说是爷爷奶奶。赶巧爷爷从里屋走出来，默默出门了。一阵沈默，同学惊恐的问：你刚刚有看到吗？',createAt:'2016-11-21 10:44',userName:'eclimoom',userId:'1',read:'11',commentTimes:'2016-11-12 13:00:00'},
    {id:"3",body:'小明掏口袋的时候，一把钥匙掉了，当时没有发现，后来回去找！在路边有对小情侣在那里，男的突然激动的说：是谁的？到底是谁的？小明连忙说：我的，我的，是我的！后来小明才知道，原来是那女的怀孕了~',createAt:'2016-11-21 10:44',nick:'eclimoom',userId:'1',read:'12',commentTimes:'2016-11-12 14:00:00'}
  ];


  ngOnInit() {
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
