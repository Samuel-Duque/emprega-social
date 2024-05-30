import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstitucionalComponent } from './institucional.component';
import { VagasComponent } from './pages/vagas/vagas.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { QualificacoesComponent } from './pages/qualificacoes/qualificacoes.component';
import { PerfilCandidatoComponent } from './pages/perfil-candidato/perfil-candidato.component';
import { TestesComponent } from './pages/testes/testes.component';

const routes: Routes = [
  {
    path: '',
    component: InstitucionalComponent,
    children: [
      {
        path: '',
        component: InicioComponent,
      },
      {
        path: 'vagas',
        component: VagasComponent,
      },
      {
        path: 'qualificacoes',
        component: QualificacoesComponent,
      },
      {
        path: 'perfil-candidato',
        component: PerfilCandidatoComponent,
      },
      {
        path: 'testes',
        component: TestesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstitucionalRoutingModule {}
