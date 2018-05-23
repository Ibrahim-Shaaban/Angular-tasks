import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppErrorHandler } from './posts/errors/errorHandler-error';

import { PostsComponent } from './posts/posts.component';

import { HttpRequestService } from './services/http-request/http-request.service';
import { HttpModule } from '@angular/http';

import { NavbarComponent } from './navbar/navbar.component';

import { AppComponent } from './app.component';

import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {RouterModule} from '@angular/router' ;

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PostsComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'posts' , component : PostsComponent},
      {path: 'register' , component : RegisterComponent},
    ])
  ],
  providers: [HttpRequestService,
    {provide: ErrorHandler, useClass: AppErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
