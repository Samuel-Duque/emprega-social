import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrefeituraComponent } from './prefeitura.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { VagasComponent } from './pages/vagas/vagas.component';
import { CriarVagaComponent } from './pages/vagas/criar-vaga/criar-vaga.component';
import { InstitucionalComponent } from '@app/Institucional/Institucional.component';

const routes: Routes = [
  {
    path: '',
    component: PrefeituraComponent,
    children: [
      {
        path: '',
        component: InicioComponent,
      },
      {
        path: 'vagas',
        component: VagasComponent,
      },
      
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
export class PrefeituraRoutingModule {}
