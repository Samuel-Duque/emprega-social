import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@app/core/services/auth.service';
import { ErrorResponse } from '@app/shared/interfaces/error';
import { VerifySession } from '@app/shared/interfaces/verifySession';
import { ToastrService } from 'ngx-toastr';
import { Subject, first, takeUntil } from 'rxjs';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrl: './verify.component.css'
})
export class VerifyComponent implements OnInit, OnDestroy {
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  private redirect: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private toast: ToastrService, private authService: AuthService) { }

  ngOnInit() {
    this.verifyInfos();

    this.route.queryParams.subscribe(params => {
      this.redirect = params['redirect'];
    });
  }

  private verifyInfos() {

      this.authService.verifySession().pipe(first(), takeUntil(this._unsubscribeAll)).subscribe({
        next: (response: VerifySession | ErrorResponse) => {

          if ('error_message' in response) {
            this.toast.error(response.error_message, 'Erro')
          } else {
            const redirect = response.redirect
            this.router.navigate([redirect]);
            this.authService.setRole(response.role);
          }
        },
        error: (error) => {
          const redirect = this.redirect ? this.redirect : 'login';
          this.router.navigate([`/auth/${redirect}`]);
        },
      })
  }

  ngOnDestroy() {
    this._unsubscribeAll.next(true);
    this._unsubscribeAll.complete();
  }
}
