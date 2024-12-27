import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroduccionComponent } from './pages/introduccion/introduccion.component';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';
import { EstructuraComponent } from './pages/estructura/estructura.component';
import { ComponentesComponent } from './pages/componentes/componentes.component';
import { ModulosComponent } from './pages/modulos/modulos.component';
import { RutasComponent } from './pages/rutas/rutas.component';
import { DirectivasComponent } from './pages/directivas/directivas.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { FormulariosComponent } from './pages/formularios/formularios.component';
import { DespliegueComponent } from './pages/despliegue/despliegue.component';

export const routes: Routes = [
  { path: '', redirectTo: 'introduccion', pathMatch: 'full' },
  { path: 'introduccion', component: IntroduccionComponent },
  { path: 'configuracion', component: ConfiguracionComponent },
  { path: 'estructura', component: EstructuraComponent },
  { path: 'componentes', component: ComponentesComponent },
  { path: 'modulos', component: ModulosComponent },
  { path: 'rutas', component: RutasComponent },
  { path: 'directivas', component: DirectivasComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'formularios', component: FormulariosComponent },
  { path: 'despliegue', component: DespliegueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
