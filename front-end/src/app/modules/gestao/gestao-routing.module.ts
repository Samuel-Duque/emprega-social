import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestaoComponent } from './gestao.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { VagasComponent } from './pages/vagas/vagas.component';
import { CriarVagaComponent } from './pages/vagas/criar-vaga/criar-vaga.component';
import { DashboardEmpresaComponent } from '../dashboard-empresa/dashboard-empresa.component';

const routes: Routes = [
  {
    path: '',
    component: GestaoComponent,
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
        path: 'dashboard-empresa',
        component: DashboardEmpresaComponent
      }

    ],
  },
  {
    path: 'vagas/criar',
    component: CriarVagaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestaoRoutingModule {}
