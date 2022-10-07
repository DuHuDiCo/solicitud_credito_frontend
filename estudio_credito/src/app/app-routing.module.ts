import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { DatosCodeudorComponent } from './components/solicitud-credito-cliente/datos-codeudor/datos-codeudor.component';
import { DatosCompradorComponent } from './components/solicitud-credito-cliente/datos-comprador/datos-comprador.component';
import { DocumentosComponent } from './components/solicitud-credito-cliente/documentos/documentos.component';
import { ReferenciasComercialesComponent } from './components/solicitud-credito-cliente/referencias-comerciales/referencias-comerciales.component';
import { ReferenciasPersonalesComponent } from './components/solicitud-credito-cliente/referencias-personales/referencias-personales.component';
import { SolicitudCreadaComponent } from './components/solicitud-credito-cliente/solicitud-creada/solicitud-creada.component';
import { SolicitudCreditoClienteComponent } from './components/solicitud-credito-cliente/solicitud-credito-cliente.component';
import { UsoYTratamientoDatosPersonalesComponent } from './components/solicitud-credito-cliente/uso-y-tratamiento-datos-personales/uso-y-tratamiento-datos-personales.component';

import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { SolicitudComponent } from './pages/admin/solicitud/solicitud.component';
import { ViewCreditosComponent } from './pages/admin/view-creditos/view-creditos.component';
import { AutorizacionesComponent } from './pages/analistas/analisis-credito/autorizaciones/autorizaciones.component';
import { EstudioCodeudorComponent } from './pages/analistas/analisis-credito/estudio-codeudor/estudio-codeudor.component';
import { EstudioCompradorComponent } from './pages/analistas/analisis-credito/estudio-comprador/estudio-comprador.component';
import { CreditoAnalizadoComponent } from './pages/analistas/credito-analizado/credito-analizado.component';
import { DashboardAnalistasComponent } from './pages/analistas/dashboard-analistas/dashboard-analistas.component';
import { VerCreditosAnalistaComponent } from './pages/analistas/ver-creditos-analista/ver-creditos-analista.component';


import { ModeradorComponent } from './pages/moderador/moderador/moderador.component';
import { UserComponent } from './pages/user/user/user.component';
import { AdminGuard } from './services/admin.guard';
import { AnalistaGuard } from './services/analista.guard';



const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    pathMatch: "full"
  },

  {
    path:'analista',
    component:DashboardAnalistasComponent,
    canActivate:[AnalistaGuard],
    children:[
      {
        path:'creditos',
        component:VerCreditosAnalistaComponent,
        
      },
      {
        path:'solicitud/:solicitudId/estudio-comprador',
        component:EstudioCompradorComponent
      },
      {
        path:'solicitud/:solicitudId/estudio-codeudor',
        component:EstudioCodeudorComponent
      },
      {
        path:'solicitud/:solicitudId/estudio-autorizaciones',
        component:AutorizacionesComponent
      },
      {
        path:'solicitud/credito-analizado',
        component:CreditoAnalizadoComponent
      }
      
    ]
  },
   
  {
    path: "admin",
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: 'solicitud',
        component: SolicitudComponent,
       
      },
      {
        path: 'view-solicitudes',
        component: ViewCreditosComponent
      }

    ]
  },
  {
    path: 'moderador',
    component: ModeradorComponent,
    pathMatch: 'full'
  },
  {
    path: 'user',
    component: UserComponent,
    pathMatch: 'full'
  },
  {
    path: 'solicitud-credito/:solicitudId',
    component: SolicitudCreditoClienteComponent,

    children: [
      {
        path: 'comprador',
        component: DatosCompradorComponent
      },
      {
        path: 'codeudor',
        component: DatosCodeudorComponent
      },
      {
        path: 'referencias-comerciales',
        component: ReferenciasComercialesComponent
      },
      {
        path: 'referencias-personales',
        component: ReferenciasPersonalesComponent
      },
      {
        path: 'docs',
        component: DocumentosComponent
      },
      

    ]

  },
 
  {
    path: 'success',
    component: SolicitudCreadaComponent,
    pathMatch:'full'
  },
  {
    path:'tratamiento-datos-personales',
    component: UsoYTratamientoDatosPersonalesComponent,
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
