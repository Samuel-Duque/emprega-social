import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cadastro-profissional',
  templateUrl: './cadastro-profissional.component.html',
  styleUrls: ['./cadastro-profissional.component.css']
})
export class CadastroProfissionalComponent implements AfterViewInit {
  @ViewChild('password')
  password!: ElementRef;

  @ViewChild('repeatPassword')
  repeatPassword!: ElementRef;


  ngAfterViewInit() {
    // Verificação requerimentos da senha
    this.password.nativeElement.addEventListener('input', (e: { target: { value: any; }; }) => {
      var password = e.target.value;

      if (password.length >= 6) {
        document.querySelector('.length')?.classList.add('text-green-500');
        document.querySelector('.length .icon')?.classList.add('text-green-500');
        document.querySelector('.length')?.classList.remove('text-gray-500');
        document.querySelector('.length .icon')?.classList.remove('text-gray-500');
    } else {
      document.querySelector('.length')?.classList.add('text-gray-500');
      document.querySelector('.length .icon')?.classList.add('text-gray-500');
      document.querySelector('.length')?.classList.remove('text-green-500');
      document.querySelector('.length .icon')?.classList.remove('text-green-500');
    }

    // Verificar se a senha tem pelo menos um caractere minúsculo
    if (/[A-Z]/.test(password)) {
        document.querySelector('.lowercase')?.classList.add('text-green-500');
        document.querySelector('.lowercase .icon')?.classList.add('text-green-500');
        document.querySelector('.lowercase')?.classList.remove('text-gray-500');
        document.querySelector('.lowercase .icon')?.classList.remove('text-gray-500');
    } else {
      document.querySelector('.lowercase')?.classList.add('text-gray-500');
      document.querySelector('.lowercase .icon')?.classList.add('text-gray-500');
      document.querySelector('.lowercase')?.classList.remove('text-green-500');
      document.querySelector('.lowercase .icon')?.classList.remove('text-green-500');
    }

    // Verificar se a senha tem pelo menos um caractere especial
    if (/[!#?$&*@()%¨"']/.test(password)) {
      document.querySelector('.special')?.classList.add('text-green-500');
      document.querySelector('.special .icon')?.classList.add('text-green-500');
      document.querySelector('.special')?.classList.remove('text-gray-500');
      document.querySelector('.special .icon')?.classList.remove('text-gray-500');
    } else {
      document.querySelector('.special')?.classList.add('text-gray-500');
      document.querySelector('.special .icon')?.classList.add('text-gray-500');
      document.querySelector('.special')?.classList.remove('text-green-500');
      document.querySelector('.special .icon')?.classList.remove('text-green-500');
    }
});
  const checarSenhaMatch = () => {
    const passwordError = document.getElementById('passwordError');
    const passwordSuccess = document.getElementById('passwordSuccess');

    if (this.password.nativeElement.value !== this.repeatPassword.nativeElement.value) {
      // As senhas não correspondem
      passwordError?.classList.remove('hidden');
      passwordSuccess?.classList.add('hidden');
      this.repeatPassword.nativeElement.classList.add('border-red-500');
      this.repeatPassword.nativeElement.classList.remove('border-primary');
      
    } 
    else {
      // As senhas correspondem
      passwordError?.classList.add('hidden');
      passwordSuccess?.classList.remove('hidden');
      this.repeatPassword.nativeElement.classList.add('border-primary');
      this.repeatPassword.nativeElement.classList.remove('border-red-500');
    }
  };

  this.password.nativeElement.addEventListener('input', checarSenhaMatch);
  this.repeatPassword.nativeElement.addEventListener('input', checarSenhaMatch);
}
}