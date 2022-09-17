import { Component, OnInit } from '@angular/core';
import { CreditoService } from 'src/app/services/credito.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  contador: any = 1;

  venta = {
    "id": '',
    "referencia": '',
    "producto": '',
    "pago_inicial": 0,
    "cuotas": 0,
    "valor_producto": 0
  }

  ventas: any = []

  solicitudCredito = {}

  constructor(private creditoService:CreditoService) { }

  ngOnInit(): void {
  }


  public crearVentas() {
    this.venta.id = this.contador;
    this.ventas.push(this.venta);
    console.log(this.ventas)
    this.venta = {
      "id": '',
      "referencia": '',
      "producto": '',
      "pago_inicial": 0,
      "cuotas": 0,
      "valor_producto": 0
    }
    this.contador = this.contador + 1;
  }

  public crearSolicitudCredito() {
    console.log(this.ventas);
    this.creditoService.crearSolicituCredito(this.ventas).subscribe(
      (data:any)=>{
        Swal.fire({
          position:'top-end',
          icon:'success',
          title:'Solicitud de Credito Creada Exitosamente',
          showConfirmButton: false,
          timer:2000
        })
        console.log(data);
      }, (error:any)=>{
        Swal.fire("Error", "Error al crear la solicitud de credito", 'error');
        console.log(error);
      }
    );
  }

  public eliminarItem(id:any) {
    
    delete(this.ventas[id-1])
    this.ventas = this.ventas.filter((v:any) => v.id != id);
  }


}
