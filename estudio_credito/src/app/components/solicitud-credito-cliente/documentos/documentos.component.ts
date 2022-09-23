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
    "dataCredito":false,
    "datosPersonales":false,
    "cedula_ciudadania":[{ "frente_cedula":'', "respaldo_cedula":''}],
    "foto":{}
  }

  valid=true;
  
  constructor(private emisor: SolicituCreditoClienteEmisorService, private toast:NgToastService,private credito:CreditoService,private solicitudCredito: CreditoService, private renderer2: Renderer2, @Inject(PLATFORM_ID) private _platform: Object) { }

  ngOnInit(): void {

  }

  public enviarSolicitud(){
    
    this.credito.guardarTodo();
    
    this.credito.enviarSolicitud().subscribe(
      (data:any) => {
        console.log(data);
      },(error:any)=>{
        console.log(error);
      }
    );
    
  }

  public guardarSeccion(){
    
    
    
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
      if(this.docs.cedula_ciudadania.length == 0 || this.docs.cedula_ciudadania.length == 0 || this.docs.foto == null){
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
    let date = new Date();
    let mes = date.getMonth() + 1;
    let fecha = date.getFullYear()+'-'+mes+'-'+date.getDate() +' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    
    return fecha;
  }


  
  

}
