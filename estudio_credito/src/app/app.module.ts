import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { HttpClientModule} from '@angular/common/http';

import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { ModeradorComponent } from './pages/moderador/moderador/moderador.component';
import { UserComponent } from './pages/user/user/user.component';
import { SolicitudComponent } from './pages/admin/solicitud/solicitud.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AuthInterceptorProviders } from './services/auth.interceptor';
import { ViewCreditosComponent } from './pages/admin/view-creditos/view-creditos.component';
import { SolicitudCreditoClienteComponent } from './components/solicitud-credito-cliente/solicitud-credito-cliente.component';
import { DatosCompradorComponent } from './components/solicitud-credito-cliente/datos-comprador/datos-comprador.component';
import { DatosCodeudorComponent } from './components/solicitud-credito-cliente/datos-codeudor/datos-codeudor.component';
import { ReferenciasComercialesComponent } from './components/solicitud-credito-cliente/referencias-comerciales/referencias-comerciales.component';
import { ReferenciasPersonalesComponent } from './components/solicitud-credito-cliente/referencias-personales/referencias-personales.component';
import { DocumentosComponent } from './components/solicitud-credito-cliente/documentos/documentos.component';
import { WebcamModule } from '@cbdev/ngx-webcam';
import { PhotoComponent } from './components/solicitud-credito-cliente/documentos/photo/photo.component';
import { CedulaComponent } from './components/solicitud-credito-cliente/documentos/cedula/cedula.component';
import { RespaldoCedulaComponent } from './components/solicitud-credito-cliente/documentos/cedula/respaldo-cedula/respaldo-cedula.component';
import { CedulaCodeudorComponent } from './components/solicitud-credito-cliente/documentos/cedula-codeudor/cedula-codeudor.component';
import { RespaldoCedulaCodeudorComponent } from './components/solicitud-credito-cliente/documentos/cedula-codeudor/respaldo-cedula-codeudor/respaldo-cedula-codeudor.component';
import { SolicitudCreadaComponent } from './components/solicitud-credito-cliente/solicitud-creada/solicitud-creada.component';
import { DashboardAnalistasComponent } from './pages/analistas/dashboard-analistas/dashboard-analistas.component';
import { SidebarAnalistaComponent } from './pages/analistas/sidebar-analista/sidebar-analista.component';
import { VerCreditosAnalistaComponent } from './pages/analistas/ver-creditos-analista/ver-creditos-analista.component';
import { EstudioCompradorComponent } from './pages/analistas/analisis-credito/estudio-comprador/estudio-comprador.component';
import { EstudioCodeudorComponent } from './pages/analistas/analisis-credito/estudio-codeudor/estudio-codeudor.component';
import { AutorizacionesComponent } from './pages/analistas/analisis-credito/autorizaciones/autorizaciones.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   
    NavbarComponent,
    SidebarComponent,
    ModeradorComponent,
    UserComponent,
    SolicitudComponent,
    DashboardComponent,
    ViewCreditosComponent,
    SolicitudCreditoClienteComponent,
    DatosCompradorComponent,
    DatosCodeudorComponent,
    ReferenciasComercialesComponent,
    ReferenciasPersonalesComponent,
    DocumentosComponent,
    PhotoComponent,
    CedulaComponent,
    RespaldoCedulaComponent,
    CedulaCodeudorComponent,
    RespaldoCedulaCodeudorComponent,
    SolicitudCreadaComponent,
    DashboardAnalistasComponent,
    SidebarAnalistaComponent,
    VerCreditosAnalistaComponent,
    EstudioCompradorComponent,
    EstudioCodeudorComponent,
    AutorizacionesComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgToastModule, 
    WebcamModule
  ],
  providers: [AuthInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
