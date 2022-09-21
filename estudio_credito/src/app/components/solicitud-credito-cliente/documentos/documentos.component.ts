import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { CreditoService } from 'src/app/services/credito.service';
import { SolicituCreditoClienteEmisorService } from 'src/app/services/solicitu-credito-cliente-emisor.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css'],

})
export class DocumentosComponent implements OnInit {
 
  solicitudId: any;
  dataCredito={
    "autorizacion":false,
    "fecha": '',
  }
  datosPersonales={
    "autorizacion":false,
    "fecha":'',
  }

  docs={
    "frenteCedula":null,
    "respaldoCedula":null,
    "foto":null,
    "dataCredito":null,
    "datosPersonales":null
  }

  valid=true;
  
  constructor(private emisor: SolicituCreditoClienteEmisorService, private toast:NgToastService,private credito:CreditoService,private solicitudCredito: CreditoService, private renderer2: Renderer2, @Inject(PLATFORM_ID) private _platform: Object) { }

  ngOnInit(): void {

  }

  public enviarSolicitud(){
    
   
    
  }

  public guardarSeccion(){
    
    let fecha = this.obtenerFechaActual();
    this.dataCredito.fecha = String(fecha);
    this.datosPersonales.fecha = String(fecha);
    if(this.dataCredito.autorizacion == false || this.datosPersonales.autorizacion == false ){
      this.toast.error({
        detail: "Error",
        summary: "Debes Aceptar las Autorizaciones",
        position: "tr",
        duration: 3500
      })
    
    
    }else{
      this.docs = this.credito.getDocs();
      console.log(this.docs);
      if(this.docs.frenteCedula == null || this.docs.respaldoCedula == null || this.docs.foto == null){
        this.toast.error({
          detail: "Error",
          summary: "Debes Tomar la foto de cedula y rostro",
          position: "tr",
          duration: 3500
        })
      }else{
        this.credito.guardarAutorizaciones(this.dataCredito, this.datosPersonales);
        this.valid = false;
      }
      
    }
    
  }

  public obtenerFechaActual(){
    let date : Date = new Date();
    return date;
  }

  

}
