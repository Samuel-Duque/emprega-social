import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatoComponent } from './candidato.component';

const routes: Routes = [
  {
    path: '',
    component: CandidatoComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidatoRoutingModule {}
