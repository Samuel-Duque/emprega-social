import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './auth/login/login.component';
import { CadastroProfissionalComponent } from './auth/cadastro-profissional/cadastro-profissional.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VagasComponent } from './pages/vagas/vagas.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    CadastroProfissionalComponent,
    VagasComponent,
  ],
  imports: [
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ]
})
export class HomeModule { }
