import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-criar-vaga',
  templateUrl: './criar-vaga.component.html',
  styleUrl: './criar-vaga.component.css'
})
export class CriarVagaComponent implements OnInit {

  step: number = 1; // Passo

  constructor(private titleService: Title, private router: Router, private location: Location) {}

  ngOnInit(): void {
    this.titleService.setTitle('Emprega Social - Criar Vaga');
  }

  voltar() {
    this.location.back();
  }

  atualizarContinuar() {
    this.step++;
  }

}
