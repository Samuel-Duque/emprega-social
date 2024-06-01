import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../assets/environments/environment';

@Injectable()
export class TokenHttpInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const isEmpregaSocial = request.url.includes(environment.apiBaseUrl);

    if (!isEmpregaSocial) {
      return next.handle(request);
    }

    request = request.clone({

      withCredentials: true,
      setHeaders: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
      },
    });
    return next.handle(request);
  }
}
