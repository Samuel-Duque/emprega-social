import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Erro404Component } from './modules/institucional/pages/erro-404/erro-404.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/institucional/institucional.module').then(
        (m) => m.InstitucionalModule
      ),
  },
  // {
  //   path: 'gestao',
  //   loadChildren: () =>
  //     import('./prefeitura/prefeitura.module').then((m) => m.PrefeituraModule),
  // },
  {
    path: '**',
    component: Erro404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
