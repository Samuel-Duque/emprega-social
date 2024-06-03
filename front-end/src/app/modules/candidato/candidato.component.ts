import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrl: './candidato.component.css'
})
export class CandidatoComponent {

  constructor(private authService: AuthService, private router: Router, private toast: ToastrService) { }

  logout() {
    this.authService.logout().pipe(first()).subscribe({
      next: () => {
        this.router.navigate(['/auth/login']);
      },
      error: (error) => {
        this.toast.error("Ocorreu um erro ao realizar ao sair", "Erro");
      }
    });
  }

}
