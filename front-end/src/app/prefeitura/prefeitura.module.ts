import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrefeituraComponent } from './prefeitura.component';
import { PrefeituraRoutingModule } from './prefeitura-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './pages/inicio/inicio.component';
import { VagasComponent } from './pages/vagas/vagas.component';



@NgModule({
  declarations: [
    PrefeituraComponent,
    InicioComponent,
    VagasComponent
  ],
  imports: [
    CommonModule,
    PrefeituraRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ]
})
export class PrefeituraModule { }
