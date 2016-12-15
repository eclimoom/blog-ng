import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { CommentManageComponent } from './comment-manage/comment-manage.component';
import { PostManageComponent } from './post-manage/post-manage.component';
import { SysSetComponent } from './sys-set/sys-set.component';
import { ManageNavComponent } from './manage-nav/manage-nav.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { TagManageComponent } from './tag-manage/tag-manage.component';
import { ProfileComponent } from '../user/profile/profile.component';
import { PostAddComponent } from './post-add/post-add.component';


const adminRoutes:Routes = [
  {
    path:'',
    component:AdminLayoutComponent,
    children: [
      { path: '', component: PostManageComponent },
      { path: 'post', component: PostManageComponent },
      { path: 'comment', component: CommentManageComponent },
      { path: 'sys-set', component: SysSetComponent },
      { path: 'user', component: UserManageComponent },
      { path: 'tag', component: TagManageComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'post-add', component: PostAddComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [
    AdminLayoutComponent,
    CommentManageComponent,
    ManageNavComponent,
    PostManageComponent,
    SysSetComponent,
    UserManageComponent,
    TagManageComponent,
    ProfileComponent,
    PostAddComponent
  ],
  exports:[
    HttpModule,
    PaginationModule,
    AdminLayoutComponent
  ],
  providers: []
})
export default class AdminModule { }
