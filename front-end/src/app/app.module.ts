import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptorService } from './core/interceptors/http-error.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenHttpInterceptor } from './core/interceptors/token-http.interceptor';
import { DashboardEmpresaComponent } from './modules/dashboard-empresa/dashboard-empresa.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardEmpresaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    provideClientHydration(),
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptorService, multi: true  },
    { provide: HTTP_INTERCEPTORS, useClass: TokenHttpInterceptor, multi: true  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
