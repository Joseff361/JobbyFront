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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EstadisticasComponent,
    ScrapingComponent,
    EmpresasComponent,
    LoginComponent,
    SigninEmpresasComponent,
    SigninEstudiantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
