import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  Login,
  LoginErrorResponse,
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
    private auth: AuthService,
    private toast: ToastrService
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

      this.auth
        .signIn(login)
        .pipe(first(), takeUntil(this._unsubscribeAll))
        .subscribe({
          next: (response: LoginResponse | LoginErrorResponse) => {
            this.isLoading = false;
            console.log(response);
            // this.route.navigate(['/home']);

            // verifica se a resposta possui error_message ou access_token
            if ('error_message' in response) {
              this.isLoginError = true;
            } else {
              this.toast.success('Login efetuado com sucesso', 'Sucesso');
              // this.route.navigate(['/home']);
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
