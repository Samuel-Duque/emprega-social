import { Component } from '@angular/core';

@Component({
  selector: 'app-qualificacoes',
  templateUrl: './qualificacoes.component.html',
  styleUrls: ['./qualificacoes.component.css']
})
export class QualificacoesComponent {
  aulas = [
    {
      titulo: 'Aulas de Português',
      descricao: 'Melhore suas habilidades em língua portuguesa com nossas aulas interativas.',
      link: 'https://igarassu.pe.gov.br/portugues',
      imagem: '/assets/images/portugues.png',
      duracao: '4 semanas',
      dificuldade: 'Iniciante',
      tipo: 'Online',
      categoria: 'Língua Portuguesa'
    },
    {
      titulo: 'Aulas de Lógica',
      descricao: 'Desenvolva seu raciocínio lógico com exercícios práticos e desafios.',
      link: 'https://igarassu.pe.gov.br/logica',
      imagem: '/assets/images/logica.jpg',
      duracao: '6 semanas',
      dificuldade: 'Intermediário',
      tipo: 'Presencial',
      categoria: 'Lógica'
    },
    {
      titulo: 'Aulas de Matemática',
      descricao: 'Aprenda matemática de forma fácil e divertida com nossos professores experientes.',
      link: 'https://igarassu.pe.gov.br/matematica',
      imagem: '/assets/images/mathclass.jpg',
      duracao: '8 semanas',
      dificuldade: 'Avançado',
      tipo: 'Online',
      categoria: 'Matemática'
    },
    {
      titulo: 'Aulas de Ética',
      descricao: 'Compreenda a importância da ética no dia a dia e em sua carreira profissional.',
      link: 'https://igarassu.pe.gov.br/etica',
      imagem: '/assets/images/etica.jpg',
      duracao: '3 semanas',
      dificuldade: 'Iniciante',
      tipo: 'Presencial',
      categoria: 'Ética'
    }
  ];

  filtros = {
    duracao: ['Todas', '3 semanas', '4 semanas', '6 semanas', '8 semanas'],
    dificuldade: ['Todas', 'Iniciante', 'Intermediário', 'Avançado'],
    tipo: ['Todos', 'Online', 'Presencial'],
    categoria: ['Todas', 'Língua Portuguesa', 'Lógica', 'Matemática', 'Ética']
  };

  filtroSelecionado = {
    duracao: 'Todas',
    dificuldade: 'Todas',
    tipo: 'Todos',
    categoria: 'Todas'
  };

  filtrarAulas() {
    return this.aulas.filter(aula => {
      return (this.filtroSelecionado.duracao === 'Todas' || aula.duracao === this.filtroSelecionado.duracao) &&
             (this.filtroSelecionado.dificuldade === 'Todas' || aula.dificuldade === this.filtroSelecionado.dificuldade) &&
             (this.filtroSelecionado.tipo === 'Todos' || aula.tipo === this.filtroSelecionado.tipo) &&
             (this.filtroSelecionado.categoria === 'Todas' || aula.categoria === this.filtroSelecionado.categoria);
    });
  }
}
