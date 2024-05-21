import { Component } from '@angular/core';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css']
})
export class VagasComponent {
  vagas = [
    {
      titulo: 'Desenvolvedor Front-end',
      empresa: 'Tech Solutions',
      localizacao: 'Igarassu, PE',
      descricao: 'Estamos buscando um desenvolvedor front-end com experiência em Angular e TypeScript.',
      salario: 'R$ 6.000 - R$ 8.000',
      data: 'Publicado há 3 dias',
      tipo: 'Remoto',
      modelo: 'Efetivo',
      pcD: true,
      logo: '/assets/images/logo1.png'
    },
    {
      titulo: 'Analista de Dados',
      empresa: 'Data Insights',
      localizacao: 'Igarassu, PE',
      descricao: 'Analista de Dados com experiência em SQL e Python.',
      salario: 'R$ 5.000 - R$ 7.000',
      data: 'Publicado há 5 dias',
      tipo: 'Híbrido',
      modelo: 'Efetivo',
      pcD: false,
      logo: '/assets/images/logo2.png'
    },
    {
      titulo: 'Designer UX/UI',
      empresa: 'Creative Agency',
      localizacao: 'Goiana, PE',
      descricao: 'Procuramos um designer UX/UI para criar experiências de usuário incríveis.',
      salario: 'R$ 4.500 - R$ 6.500',
      data: 'Publicado há 7 dias',
      tipo: 'Presencial',
      modelo: 'Estágio',
      pcD: true,
      logo: '/assets/images/logo3.png'
    },
    {
      titulo: 'Tech Lead',
      empresa: 'Creative Agency',
      localizacao: 'Goiana, PE',
      descricao: 'Procuramos um líder técnico para liderar nossa equipe de desenvolvimento.',
      salario: 'R$ 8.000 - R$ 10.000',
      data: 'Publicado há 7 dias',
      tipo: 'Presencial',
      modelo: 'Efetivo',
      pcD: true,
      logo: '/assets/images/logo3.png'
    },
  ];
}
