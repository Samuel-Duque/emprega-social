import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './auth/login/login.component';
import { CadastroProfissionalComponent } from './auth/cadastro-profissional/cadastro-profissional.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    CadastroProfissionalComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
