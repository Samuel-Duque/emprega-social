import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestaoRoutingModule } from './gestao-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CriarVagaComponent } from './pages/vagas/criar-vaga/criar-vaga.component';
import { QuillModule } from 'ngx-quill';
import { SharedModule } from '@app/shared/shared.module';
import { VagasComponent } from './pages/vagas/vagas.component';
import { GestaoComponent } from './gestao.component';



@NgModule({
  declarations: [
    GestaoComponent,
    InicioComponent,
    CriarVagaComponent,
    VagasComponent
  ],
  imports: [
    CommonModule,
    GestaoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    SharedModule
  ]
})
export class GestaoModule { }
