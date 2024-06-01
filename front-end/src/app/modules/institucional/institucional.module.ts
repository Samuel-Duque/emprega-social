import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitucionalRoutingModule } from './institucional-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InstitucionalComponent } from './institucional.component';
import { VagasComponent } from './pages/vagas/vagas.component';
import { QualificacoesComponent } from './pages/qualificacoes/qualificacoes.component';
import { PerfilCandidatoComponent } from './pages/perfil-candidato/perfil-candidato.component';
import { TestesComponent } from './pages/testes/testes.component';
import { SharedModule } from '@app/shared/shared.module';
import { VisualizarVagaComponent } from './pages/vagas/visualizar-vaga/visualizar-vaga.component';


@NgModule({
  declarations: [
    InstitucionalComponent,
    VagasComponent,
    QualificacoesComponent,
    PerfilCandidatoComponent,
    TestesComponent,
    VisualizarVagaComponent,
    
  ],
  imports: [
    InstitucionalRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    CommonModule
  ]
})
export class InstitucionalModule { }
