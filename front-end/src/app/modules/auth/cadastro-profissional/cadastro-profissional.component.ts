import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-cadastro-profissional',
  templateUrl: './cadastro-profissional.component.html',
  styleUrls: ['./cadastro-profissional.component.css']
})
export class CadastroProfissionalComponent {
  currentStep$ = this.cadastroService.getCurrentStep();
  cadastroForm: FormGroup;

  constructor(private cadastroService: CadastroService, private fb: FormBuilder) {
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
    this.cadastroService.nextStep();
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
}
