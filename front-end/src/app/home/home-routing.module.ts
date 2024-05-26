import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { VagasComponent } from './pages/vagas/vagas.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './auth/login/login.component';
import { CadastroProfissionalComponent } from './auth/cadastro-profissional/cadastro-profissional.component';
import { VerifyComponent } from './auth/verify/verify.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: InicioComponent,
      },
      {
        path: 'vagas',
        component: VagasComponent,
      },
    ],
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'cadastro-profissional',
        component: CadastroProfissionalComponent,
      },
      {
        path: 'verify',
        component: VerifyComponent,
      }
    ],
  },
  {
    path: 'login',
    redirectTo: 'auth/verify',
  },
  {
    path: 'cadastro-profissional',
    redirectTo: 'auth/cadastro-profissional',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
