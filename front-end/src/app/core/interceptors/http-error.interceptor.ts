
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24

import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor,HttpRequest,HttpResponse,HttpErrorResponse} from '@angular/common/http';
import {Observable, of, throwError} from "rxjs";
import {catchError, map} from 'rxjs/operators';
import { Router } from "@angular/router"
import { ToastrService } from "ngx-toastr"

@Injectable()
export class HttpErrorInterceptorService implements HttpInterceptor {

  constructor(public router: Router, private toast: ToastrService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      catchError((error) => {
        // console.error(error);
        this.toast.error('Ocorreu um erro inesperado. Tente novamente mais tarde.', 'Erro')
        return throwError(error.message);
      })
    )
  }
}
