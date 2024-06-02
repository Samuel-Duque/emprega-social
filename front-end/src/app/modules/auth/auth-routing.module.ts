import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VerifyComponent } from './verify/verify.component';
import { CadastroProfissionalComponent } from './cadastro-profissional/cadastro-profissional.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'candidato/register',
    component: CadastroProfissionalComponent,
  },
  {
    path: 'verify',
    component: VerifyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
