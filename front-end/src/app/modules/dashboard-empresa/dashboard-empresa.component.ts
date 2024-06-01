import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-empresa',
  templateUrl: './dashboard-empresa.component.html',
  styleUrls: ['./dashboard-empresa.component.css']
})
export class DashboardEmpresaComponent implements OnInit {
  empresa = {
    nome: 'Nome da Empresa',
    logo: '/assets/images/logo-empresa.png',
    vagas: 12,
    candidaturas: 34
  };

  vagas = [
    {
      titulo: 'Desenvolvedor Full Stack',
      local: 'Remoto',
      status: 'Ativo',
      candidatos: 10
    },
    {
      titulo: 'Analista de Dados',
      local: 'São Paulo, SP',
      status: 'Encerrado',
      candidatos: 25
    },
    // Adicione mais vagas conforme necessário
  ];

  constructor() {}

  ngOnInit(): void {}
}
