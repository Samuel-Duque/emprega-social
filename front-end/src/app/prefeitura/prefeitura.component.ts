import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '@app/shared/services/auth.service';
import { initFlowbite } from 'flowbite';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';

@Component({
  selector: 'app-prefeitura',
  templateUrl: './prefeitura.component.html',
  styleUrl: './prefeitura.component.css'
})
export class PrefeituraComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private toast: ToastrService) { }

  ngOnInit() {
    this.flowbite();
  }

  private flowbite() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log('initFlowbite');

        initFlowbite();
      }
    });
  }

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
