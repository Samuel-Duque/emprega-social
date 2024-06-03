import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatoComponent } from './candidato.component';
import { PerfilCandidatoComponent } from './pages/perfil-candidato/perfil-candidato.component';
import { VagasComponent } from '../institucional/pages/vagas/vagas.component';

const routes: Routes = [
  {
    path: '',
    component: CandidatoComponent,
    children: [
      {
        path: '',
        component: PerfilCandidatoComponent,
      },
      {
        path: 'vagas',
        component: VagasComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidatoRoutingModule {}
