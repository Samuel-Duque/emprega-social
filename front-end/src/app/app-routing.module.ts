import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Erro404Component } from './shared/components/erro-404/erro-404.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
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
