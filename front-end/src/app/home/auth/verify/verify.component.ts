import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorResponse } from '@app/shared/interfaces/error';
import { AuthService } from '@app/shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Subject, first, takeUntil } from 'rxjs';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrl: './verify.component.css'
})
export class VerifyComponent implements OnInit, OnDestroy {
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private route: Router, private toast: ToastrService, private authService: AuthService) { }

  ngOnInit() {
    this.verifyInfos();
  }

  private verifyInfos() {

      this.authService.verifySession().pipe(first(), takeUntil(this._unsubscribeAll)).subscribe({
        next: (response: any | ErrorResponse) => {
          console.log(response);

          // if ('error_message' in response) {
          //   this.toast.error(response.error_message, 'Erro')
          // } else {
          //   this.toast.success("Sessão verificada", "sucesso")
          // }
        },
        error: (error) => {
          this.route.navigate(['/login']);
          // this.toast.error("Ocorreu um erro ao realizar a verificação das informações", "Erro");
        },
      })
    // }
  }

  ngOnDestroy() {
    this._unsubscribeAll.next(true);
    this._unsubscribeAll.complete();
  }
}
