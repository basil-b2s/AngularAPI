
import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse} from '@angular/common/http';

import { Observable, catchError, throwError } from 'rxjs';


@Injectable()
export class apicallingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
      console.log("hiii")
      return next.handle(req)
      .pipe(
        catchError((error : HttpErrorResponse) =>{
          alert(`HTTP Error occured for the url "${req.url}"`);
          return throwError(error);
        })
      );
  }
}