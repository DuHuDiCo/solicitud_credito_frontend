import { Component, OnInit } from '@angular/core';
import { MensajesService } from 'src/app/services/mensajes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  mensaje = {
    "to": '57'+'',
    "text":''
  }

  constructor(private mensajeService:MensajesService) { }

  ngOnInit(): void {
  }

  public enviarMensaje(){
    console.log(this.mensaje)
    this.mensajeService.crearMensaje(this.mensaje).subscribe(
      (data:any)=>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Mensaje Enviado Exitosamente',
          showConfirmButton: false,
          timer: 2000
        })
      },(error:any)=>{
        console.log(error);
      }
      );
  }
}
