import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { EstadisticasComponent } from './componentes/estadisticas/estadisticas.component';
import { ScrapingComponent } from './componentes/scraping/scraping.component';
import { EmpresasComponent } from './componentes/empresas/empresas.component';
import { LoginComponent } from './componentes/login/login.component';
import { SigninEmpresasComponent } from './componentes/signin-empresas/signin-empresas.component';
import { SigninEstudiantesComponent } from './componentes/signin-estudiantes/signin-estudiantes.component';

// CHART MODULE
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EstadisticasComponent,
    ScrapingComponent,
    EmpresasComponent,
    LoginComponent,
    SigninEmpresasComponent,
    SigninEstudiantesComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
