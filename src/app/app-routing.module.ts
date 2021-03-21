import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadisticasComponent } from './componentes/estadisticas/estadisticas.component';
import { LoginComponent } from './componentes/login/login.component';
import { ScrapingComponent } from './componentes/scraping/scraping.component';
import { SigninEmpresasComponent } from './componentes/signin-empresas/signin-empresas.component';
import { SigninEstudiantesComponent } from './componentes/signin-estudiantes/signin-estudiantes.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';

const routes: Routes = [
  { path: 'estadisticas', component: EstadisticasComponent },
  { path: 'estudiantes', component: SigninEstudiantesComponent},
  { path: 'empresas', component: SigninEmpresasComponent},
  { path: 'login', component: LoginComponent},
  { path: 'usuarios', component: UsuarioComponent},
  { path: 'scraping', component: ScrapingComponent},
  { path: '', redirectTo: '/estadisticas', pathMatch: 'full'},
  { path: '**', component: EstadisticasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
