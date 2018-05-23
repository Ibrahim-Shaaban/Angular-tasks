import { BadInput } from './errors/badInput-error';
import { NotFoundError } from './errors/not-founderror';
import { AppError } from './errors/app-error';
import { HttpRequestService } from './../services/http-request/http-request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  getArray = [] ;

  constructor(private service: HttpRequestService) { }

  ngOnInit() {
    this.service.get().subscribe(response => {
      this.getArray = response ;


    }, ( error: Response) => {
      throw error ;

    });

  }
  post(post) {
    const user: any = {title : post.value} ;
    this.getArray.unshift(user) ;
    this.service.post(user).subscribe(response => {
      user.id = response.id ;
    }, error => {
      this.getArray.splice(0 , 1) ;
      if (error instanceof NotFoundError) {
        alert('user is not found ') ;
      }
      // tslint:disable-next-line:one-line
      else {
        throw error ;
      }
    });
  }
  put() {
    const user = {color : 'red'} ;
    this.service.put(user).subscribe(response => {
      console.log(response) ;
    } , (error: AppError) => {
      if (error instanceof NotFoundError) {
        alert('bad input ') ;
      }
      // tslint:disable-next-line:one-line
      else {
        throw error ;
      }
    }) ;
  }
  delete(post) {
    const index = this.getArray.indexOf(post) ;
    this.getArray.splice(index , 1 );
    this.service.delete(post.id).subscribe(response => {
      console.log(response) ;

    }, (error: AppError) => {
      this.getArray.splice(index, 0 , post) ;
      if (error instanceof NotFoundError) {
        alert('user is not found ') ;
      }
      // tslint:disable-next-line:one-line
      else {
        throw error ;
      }

    });
  }

}
