import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthenticateService } from '../authenticate.service';


@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(private auth: AuthenticateService){}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const  token = this.auth.getToken();
    if (token) {
      const tokenReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(tokenReq);
    } else {
      return next.handle(request);
    }

  }
}
