import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-candidato',
  templateUrl: './perfil-candidato.component.html',
  styleUrls: ['./perfil-candidato.component.css']
})
export class PerfilCandidatoComponent {
  usuario = {
    nome: 'João',
    foto: '/assets/images/usuario-foto.jpg',
    progresso: 100
  };

  oportunidades = 7;
  candidaturas = 1;

  

  habilidades = [
    { nome: 'CSS', nivel: 'Júnior', icone: 'https://skillicons.dev/icons?i=css' },
    { nome: 'JavaScript', nivel: 'Pleno', icone: 'https://skillicons.dev/icons?i=js' },
    { nome: 'PHP', nivel: 'Pleno', icone: 'https://skillicons.dev/icons?i=php' },
    { nome: 'Python', nivel: 'Pleno', icone: 'https://skillicons.dev/icons?i=python' }
  ];
}
