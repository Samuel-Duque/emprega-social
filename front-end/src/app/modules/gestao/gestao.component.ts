import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '@app/core/services/auth.service';
import { FlowbiteService } from '@app/core/services/flowbite.service';
import { initFlowbite } from 'flowbite';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';

@Component({
  selector: 'app-gestao',
  templateUrl: './gestao.component.html',
  styleUrl: './gestao.component.css'
})
export class GestaoComponent implements OnInit, OnDestroy {

  routerSubscription: any;

  constructor(private flowService: FlowbiteService, private router: Router, private authService: AuthService, private toast: ToastrService) { }

  ngOnInit() {
    this.flowService.init();
    this.flowbite();
  }

  private flowbite() {
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
          this.flowService.init();
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

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

}
