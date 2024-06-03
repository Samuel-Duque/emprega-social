import { Component, HostListener, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/services/auth.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-cadastro-profissional',
  templateUrl: './cadastro-profissional.component.html',
  styleUrls: ['./cadastro-profissional.component.css'],
})
export class CadastroProfissionalComponent implements OnInit {
  // @HostListener('window:beforeunload', ['$event'])
  // unloadNotification($event: any) {
  //   console.log('Handler for the `window:beforeunload` event');

  //   $event.returnValue = true;
  // }

  cadastroForm!: FormGroup;
  step: number = 0;
  isLoading = false;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.cadastroForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', Validators.required],
      terms: [false, Validators.requiredTrue],
    }, {validators: [this.checkPasswordMatch2, this.hasUpperCase2, this.hasSpecialChar2]});
  }

  onComecar() {
    this.step = 1;
  }

  checkPasswordMatch2(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const repeatPassword = control.get('repeatPassword')?.value;

    return password && repeatPassword && password !== repeatPassword ? { 'passwordMismatch': true } : null;
  }

  hasUpperCase2(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    return password && !/[A-Z]/.test(password) ? { 'noUpperCase': true } : null;
  }

  hasSpecialChar2(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    return password && !/[!@#$%^&*(),.?":{}|<>]/.test(password) ? { 'noSpecialChar': true } : null;
  }

  get password() {
    return this.cadastroForm.get('password');
  }

  get repeatPassword() {
    return this.cadastroForm.get('repeatPassword');
  }

  checkPasswordMatch() {
    return this.password?.value === this.repeatPassword?.value;
  }

  hasMinLength() {
    return this.password?.value.length >= 6;
  }

  hasUpperCase() {
    return /[A-Z]/.test(this.password?.value);
  }

  hasSpecialChar() {
    return /[!@#$%^&*(),.?":{}|<>]/.test(this.password?.value);
  }

  // Toda vez que é passado é colocado no parametro da url o proximo passo
  atualizarContinuar() {
    this.step++;
    this.router.navigate([], { queryParams: { passo: this.step } });
  }

  voltarPasso() {
    this.step--;
    this.router.navigate([], { queryParams: { passo: this.step } });
  }

  register() {
    this.isLoading = true;

    this.authService.signUp(this.cadastroForm.value).pipe(first()).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.router.navigate(['/auth/verify']);
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      },
    })
  }
}
