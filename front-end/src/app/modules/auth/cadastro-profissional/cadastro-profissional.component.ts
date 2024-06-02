import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-profissional',
  templateUrl: './cadastro-profissional.component.html',
  styleUrls: ['./cadastro-profissional.component.css']
})
export class CadastroProfissionalComponent implements OnInit {

  // @HostListener('window:beforeunload', ['$event'])
  // unloadNotification($event: any) {
  //   console.log('Handler for the `window:beforeunload` event');

  //   $event.returnValue = true;
  // }

  cadastroForm!: FormGroup;
  step: number = 0;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.cadastroForm = this.fb.group({
      name: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    });
  }

  onComecar() {
    this.step = 1;
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
}
