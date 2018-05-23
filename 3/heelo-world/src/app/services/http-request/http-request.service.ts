import { NotFoundError } from './../../posts/errors/not-founderror';
import { BadInput } from './../../posts/errors/badInput-error';
import { AppError } from './../../posts/errors/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch' ;
import 'rxjs/add/operator/map' ;
import {Observable} from 'rxjs/Observable' ;
import 'rxjs/add/observable/throw' ;

@Injectable()
export class HttpRequestService {
  url = 'https://jsonplaceholder.typicode.com/posts' ;

  constructor(private http: Http ) { }
  get() {
    return this.http.get(this.url)
      .map(response => response.json())
        .catch(this.error);
  }
  post(post) {
    return this.http.post(this.url , post)
    .map(response => response.json())
    .catch(this.error) ;

  }
  put(post) {
    return this.http.patch(this.url + '/' + post.id , post)
    .map(response => response.json())
    .catch(this.error) ;
  }
  delete(id) {
    return this.http.delete(this.url + '/' + id)
    .map(response => response.json())
    .catch(this.error) ;
  }
  private error(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInput(error)) ;
    }
    if (error.status === 404) {
      return Observable.throw(new NotFoundError(error)) ;
    }
    // tslint:disable-next-line:one-line
    else {
      return Observable.throw(new AppError(error)) ;

    }
  }

}
