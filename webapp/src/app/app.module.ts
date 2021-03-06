import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './post/list/list.component';
import { HotComponent } from './post/hot/hot.component';
import { TagComponent } from './post/tag/tag.component';
import { DetailComponent } from './post/detail/detail.component';
import { DetailLayoutComponent } from './post/detail-layout/detail-layout.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import {AuthService} from "./user/auth.service";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'detail/:id', component: DetailLayoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin',
    loadChildren:'app/admin-ng2/admin.module'
  },
  { path: 'user',
    loadChildren:'app/user/user.module'
  },
  { path: 'forget', component: HomeComponent },
  {
    path:'**',//404 page
    component:HomeComponent
  }
];



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HomeComponent,
    HotComponent,
    TagComponent,
    DetailComponent,
    DetailLayoutComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PaginationModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
