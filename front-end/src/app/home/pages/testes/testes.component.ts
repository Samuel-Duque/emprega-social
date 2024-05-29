import { Component } from '@angular/core';

@Component({
  selector: 'app-testes',
  templateUrl: './testes.component.html',
  styleUrls: ['./testes.component.css']
})
export class TestesComponent {
  testes = [
    {
      nome: 'Teste de Lógica',
      descricao: 'Avalie suas habilidades de raciocínio lógico.',
      categoria: 'Lógica',
      nivel: 'Intermediário',
      status: 'Concluído',
      link: 'https://example.com/teste-logica'
    },
    {
      nome: 'Teste de Programação em JavaScript',
      descricao: 'Prove seu conhecimento em JavaScript com este teste.',
      categoria: 'Programação',
      nivel: 'Avançado',
      status: 'Pendente',
      link: 'https://example.com/teste-javascript'
    },
    {
      nome: 'Teste de Matemática',
      descricao: 'Teste suas habilidades matemáticas.',
      categoria: 'Matemática',
      nivel: 'Iniciante',
      status: 'Concluído',
      link: 'https://example.com/teste-matematica'
    },
    {
      nome: 'Teste de Inglês',
      descricao: 'Avalie seu nível de inglês.',
      categoria: 'Idiomas',
      nivel: 'Avançado',
      status: 'Pendente',
      link: 'https://example.com/teste-ingles'
    },
    // Adicione mais testes conforme necessário
  ];

  filtros = {
    categorias: ['Todas', 'Lógica', 'Programação', 'Matemática', 'Idiomas'],
    niveis: ['Todos', 'Iniciante', 'Intermediário', 'Avançado']
  };

  filtroSelecionado = {
    categoria: 'Todas',
    nivel: 'Todos'
  };

  pesquisa = '';

  filtrarTestes() {
    return this.testes.filter(teste => {
      const categoriaMatch = this.filtroSelecionado.categoria === 'Todas' || teste.categoria === this.filtroSelecionado.categoria;
      const nivelMatch = this.filtroSelecionado.nivel === 'Todos' || teste.nivel === this.filtroSelecionado.nivel;
      const pesquisaMatch = teste.nome.toLowerCase().includes(this.pesquisa.toLowerCase());
      return categoriaMatch && nivelMatch && pesquisaMatch;
    });
  }
}
