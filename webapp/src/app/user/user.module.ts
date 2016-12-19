import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { UserLayoutComponent } from './user-layout/user-layout.component';
import { ProfileComponent } from './profile/profile.component';


const userRoutes:Routes = [
  {
    path:'',
    component:UserLayoutComponent,
    children: [
      { path: '', component: ProfileComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    UserLayoutComponent,
    ProfileComponent
  ],
  exports:[
    HttpModule,
    UserLayoutComponent
  ],
  providers: []
})
export default class UserModule { }
