import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-criar-vaga',
  templateUrl: './criar-vaga.component.html',
  styleUrl: './criar-vaga.component.css'
})
export class CriarVagaComponent implements OnInit {

  step: number = 1; // Passo
  htmlContent: string = ''; // Conteúdo HTML


  constructor(private sanitizer: DomSanitizer, private titleService: Title, private router: Router, private location: Location) {}

  ngOnInit(): void {
    this.titleService.setTitle('Emprega Social - Criar nova vaga');

    // Pega o passo da url
    this.router.routerState.root.queryParams.subscribe(params => {
      this.step = params['passo'] || 1;
    });
  }

  voltar() {
    this.location.back();
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

  byPassHTML(html: string) {
    return this.sanitizer.bypassSecurityTrustHtml(html)
  }

}
