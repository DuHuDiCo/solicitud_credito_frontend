import { Component, OnInit } from '@angular/core';
import { AnalistaEmisorService } from 'src/app/services/analista-emisor.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-autorizaciones',
  templateUrl: './autorizaciones.component.html',
  styleUrls: ['./autorizaciones.component.css']
})
export class AutorizacionesComponent implements OnInit {


  solicitudId:any;
  documentos:any = {}

  determinacion:any={
    "estado":'',
    "observacion":'',

  }
 
  constructor(private emisor:AnalistaEmisorService, private loginService:LoginService) { }

  ngOnInit(): void {
    this.solicitudId = this.emisor.getSolicitudId();
    this.documentos = this.emisor.getDocumentos();
  }


  public guardarSolicitudAnalista(){
    this.emisor.guardarSolicitudAnalista();
  }

  public guardarDatosAnalizador(){
    let usuario = this.loginService.getUser();
    console.log(this.determinacion)
    this.emisor.guardarDatosAnalisis(usuario.id, this.determinacion);
    this.guardarSolicitudAnalista();
  }

  

}
