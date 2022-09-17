import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CameraComponent } from './components/camera/camera.component';
import { LoginComponent } from './components/login/login.component';
import { DatosCodeudorComponent } from './components/solicitud-credito-cliente/datos-codeudor/datos-codeudor.component';
import { DatosCompradorComponent } from './components/solicitud-credito-cliente/datos-comprador/datos-comprador.component';
import { DocumentosComponent } from './components/solicitud-credito-cliente/documentos/documentos.component';
import { ReferenciasComercialesComponent } from './components/solicitud-credito-cliente/referencias-comerciales/referencias-comerciales.component';
import { ReferenciasPersonalesComponent } from './components/solicitud-credito-cliente/referencias-personales/referencias-personales.component';
import { SolicitudCreditoClienteComponent } from './components/solicitud-credito-cliente/solicitud-credito-cliente.component';

import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { SolicitudComponent } from './pages/admin/solicitud/solicitud.component';
import { ViewCreditosComponent } from './pages/admin/view-creditos/view-creditos.component';
import { ModeradorComponent } from './pages/moderador/moderador/moderador.component';
import { UserComponent } from './pages/user/user/user.component';
import { AdminGuard } from './services/admin.guard';



const routes: Routes = [
  {
    path:"",
    component:LoginComponent,
    pathMatch:"full"
  },
  {
    path:"admin",
    component:DashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'solicitud',
        component:SolicitudComponent
      },
      {
        path:'view-solicitudes',
        component:ViewCreditosComponent
      }
      
    ]
  },
  {
    path:'moderador',
    component:ModeradorComponent,
    pathMatch:'full'
  },
  {
    path:'user',
    component:UserComponent,
    pathMatch:'full'
  },
  {
    path:'solicitud-credito/:solicitudId',
    component:SolicitudCreditoClienteComponent,
    
    children:[
      {
        path:'comprador',
        component:DatosCompradorComponent
      },
      {
        path:'codeudor',
        component:DatosCodeudorComponent
      },
      {
        path:'referencias-comerciales',
        component:ReferenciasComercialesComponent
      },
      {
        path:'referencias-personales',
        component:ReferenciasPersonalesComponent
      },
      {
        path:'docs',
        component:DocumentosComponent
      }
    ]
    
  },
  {
    path:'camera',
    component:CameraComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
