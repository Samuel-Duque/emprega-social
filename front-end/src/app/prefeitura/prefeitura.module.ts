import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrefeituraComponent } from './prefeitura.component';
import { PrefeituraRoutingModule } from './prefeitura-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './pages/inicio/inicio.component';
import { VagasComponent } from './pages/vagas/vagas.component';
import { CriarVagaComponent } from './pages/vagas/criar-vaga/criar-vaga.component';



@NgModule({
  declarations: [
    PrefeituraComponent,
    InicioComponent,
    VagasComponent,
    CriarVagaComponent
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
