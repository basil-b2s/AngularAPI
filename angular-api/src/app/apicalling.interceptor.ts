import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';

import { Observable, catchError, tap, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class apicallingInterceptor implements HttpInterceptor {
  constructor(private toasterService: ToastrService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            console.log('Received response:', event);
            this.toasterService.success('Success');
          }
        },
        (error: any) => {
          if (error instanceof HttpErrorResponse) {
            console.error('Error:', error);
            this.toasterService.error('Error occured while calling the api');
          }
        }
      )
    );
  }
}
