import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorResponse } from '@app/shared/interfaces/error';
import {
  Login,
  LoginResponse,
} from '@shared/interfaces/login';
import { AuthService } from '@shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Subject, first, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit, OnDestroy {
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  email!: string;
  password!: string;
  loginForm!: FormGroup;
  isLoginError = false;
  isLoading = false;

  constructor(
    private route: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toast: ToastrService,
    // private tokenService: TokenService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.isLoading = true;

      const login: Login = {
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value,
      };

      this.authService
        .signIn(login)
        .pipe(first(), takeUntil(this._unsubscribeAll))
        .subscribe({
          next: (response: LoginResponse | ErrorResponse) => {
            this.isLoading = false;
            // console.log(response);

            // verifica se a resposta possui error_message ou access_token
            if ('error_message' in response) {
              this.isLoginError = true;
            } else {
              // this.tokenService.setTokens(response.access_token, response.refresh_token);
              // this.toast.success('Login efetuado com sucesso', 'Sucesso');
              this.route.navigate(['/auth/verify']);
            }
          },
          error: (error) => {
            console.log(error);
            this.isLoading = false;
          },
        });
    }
  }

  voltar() {
    this.route.navigate(['/']);
  }

  ngOnDestroy() {
    this._unsubscribeAll.next(true);
    this._unsubscribeAll.complete();
  }
}
