import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatoComponent } from './candidato.component';
import { CandidatoRoutingModule } from './candidato-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CandidatoComponent
  ],
  imports: [
    CommonModule,
    CandidatoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class CandidatoModule { }
