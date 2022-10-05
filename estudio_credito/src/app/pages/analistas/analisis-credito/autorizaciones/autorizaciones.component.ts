import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AnalistaEmisorService } from 'src/app/services/analista-emisor.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

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
 
  constructor(private emisor:AnalistaEmisorService, private router:Router,private toast:NgToastService,private loginService:LoginService) { }

  ngOnInit(): void {
    this.solicitudId = this.emisor.getSolicitudId();
    this.documentos = this.emisor.getDocumentos();
  }


  public guardarSolicitudAnalista(){
    if(this.determinacion.estado == '' || this.determinacion.estado == null){
      this.toast.error({
        detail: "Error",
        summary: "el campo estado esta vacio",
        position: "tr",
        duration: 3500
      })
      
    }else{
      if(this.determinacion.observacion == '' || this.determinacion.observacion == null){
        this.toast.error({
          detail: "Error",
          summary: "el campo observaciones esta vacio",
          position: "tr",
          duration: 3500
        })
      }else{
        this.emisor.guardarSolicitudAnalista();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Datos Guardados Exitosamente',
          showConfirmButton: false,
          timer: 2000
        })
        this.router.navigate(['/analista/creditos']);
        setTimeout(this.reload, 3000);
      }
    }

    

    
  }

  public reload(){
    window.location.reload();
  }

  public guardarDatosAnalizador(){
    let usuario = this.loginService.getUser();
    
    this.emisor.guardarDatosAnalisis(usuario.id, this.determinacion);
    this.guardarSolicitudAnalista();
  }

  

}
