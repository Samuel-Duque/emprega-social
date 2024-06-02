import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatoComponent } from './candidato.component';
import { CandidatoRoutingModule } from './candidato-routing.module';
import { SharedModule } from '@app/shared/shared.module';



@NgModule({
  declarations: [
    CandidatoComponent
  ],
  imports: [
    CommonModule,
    CandidatoRoutingModule,
    SharedModule
  ]
})
export class CandidatoModule { }
