import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Erro404Component } from './components/erro-404/erro-404.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';


@NgModule({
  declarations: [
    Erro404Component
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    provideHttpClient(withFetch()),
  ],
})
export class SharedModule { }
