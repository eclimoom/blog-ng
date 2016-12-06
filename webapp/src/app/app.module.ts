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

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HomeComponent,
    HotComponent,
    TagComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PaginationModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
