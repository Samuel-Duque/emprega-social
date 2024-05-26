
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

        let handled: boolean = false;
        console.error(error);
        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            console.error("Error Event");
          } else {
            console.log(`error status : ${error.status} ${error.statusText}`);
            switch (error.status) {
              case 200:
                break;
              case 201:
                break;
              case 401:      //login
                this.router.navigateByUrl("/auth/login");
                handled = true;
                break;
              case 403:     //forbidden
                this.router.navigateByUrl("/auth/login");
                handled = true;
                break;
              default:
                this.toast.error("Ocorreu um erro inesperado, tente novamente mais tarde", "Erro");
                handled = true;
                break;
            }
          }
        }
        else {
          // console.error("Other Errors");
        }

        if (handled) {
          // console.log('return back ');
          return of(error);
        } else {
          // console.log('throw error back to to the subscriber');
          return throwError(error);
        }

      })
    );
  }
}
