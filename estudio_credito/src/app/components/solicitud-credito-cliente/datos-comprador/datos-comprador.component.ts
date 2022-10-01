import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CreditoService } from 'src/app/services/credito.service';
import { SolicituCreditoClienteEmisorService } from 'src/app/services/solicitu-credito-cliente-emisor.service';
import Swal from 'sweetalert2';
import { LocationStrategy } from '@angular/common';
import { SolicitudClienteMovilEmisorService } from 'src/app/services/solicitud-cliente-movil-emisor.service';

@Component({
  selector: 'app-datos-comprador',
  templateUrl: './datos-comprador.component.html',
  styleUrls: ['./datos-comprador.component.css']
})
export class DatosCompradorComponent implements OnInit {

  solicitudId: any;

  cliente = {
    "nombres": '',
    "apellidos": '',
    "cedula": '',
    "estado_civil": '',
    "direccion": '',
    "celular": '',
    "email": '',
    "empresa": '',
    "direccion_empresa": '',
    "cargo": '',
    "tiempo_servicio": '',
    "salario": null,
    "otros_ingresos": '',
    "valor_otros_ingresos": '',
    "tipo_casa": '',
    "valor_alquiler": null,
    "propietario": '',
    "telefono_casa": '',
    "nombre_conyuge": '',
    "trabajo_conyuge": '',
    "direccion_trabajo_conyuge": '',
    "telefono_trabajo_conyuge": '',
    "nombre_pariente": '',
    "direccion_pariente": '',
    "telefono_pariente": ''


  }

  buttomsBlock:any ;


  constructor(private route: ActivatedRoute, private emisorMovil:SolicitudClienteMovilEmisorService,private locationSt: LocationStrategy ,private emisor: SolicituCreditoClienteEmisorService, private credito : CreditoService,private router: Router, private toast: NgToastService) { }

  ngOnInit(): void {
    this.solicitudId = this.emisor.getId()
    this.emisor.tomarId(this.solicitudId);
    this.prevenirRetroceso();
    this.emisorMovil.setId(this.solicitudId);


  }

  public guardarYContinuar() {
    if (this.cliente.nombres == null || this.cliente.nombres == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
        
      })
      this.bloquearBotones();
    } else if (this.cliente.apellidos == null || this.cliente.apellidos == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
      this.bloquearBotones();
    } else if (this.cliente.cedula == null || this.cliente.cedula == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
      this.bloquearBotones();
    } else if (this.cliente.estado_civil == null || this.cliente.estado_civil == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
      this.bloquearBotones();
    } else if (this.cliente.direccion == null || this.cliente.direccion == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
      this.bloquearBotones();
    } else if (this.cliente.celular == null || this.cliente.celular == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
      this.bloquearBotones();
    } else if (this.cliente.email == null || this.cliente.email == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
      this.bloquearBotones();
    } else if (this.cliente.empresa == null || this.cliente.empresa == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
      this.bloquearBotones();
    } else if (this.cliente.cargo == null || this.cliente.cargo == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
      this.bloquearBotones();
    } else if (this.cliente.tiempo_servicio == null || this.cliente.tiempo_servicio == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
    } else if (this.cliente.salario == null || this.cliente.salario == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
      this.bloquearBotones();
    } else if (this.cliente.tipo_casa == null || this.cliente.tipo_casa == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
      this.bloquearBotones();
    } else if (this.cliente.nombre_pariente == null || this.cliente.nombre_pariente == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
      this.bloquearBotones();
    } else if (this.cliente.direccion == null || this.cliente.direccion == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
      this.bloquearBotones();
    } else if (this.cliente.telefono_pariente == null || this.cliente.telefono_pariente == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
      this.bloquearBotones();
    } else {
      this.credito.guardarCliente(this.cliente);
      
      Swal.fire({
        position:'top-end',
        icon:'success',
        title:'Datos Guardados Exitosamente',
        showConfirmButton: false,
        timer:2000
      })
      this.bloquearBotones();
      this.credito.print();
      this.router.navigate(['/solicitud-credito/' + this.solicitudId + '/codeudor']);
    }
  }

  prevenirRetroceso(){
    history.pushState(null, null!, location.href);
    this.locationSt.onPopState(()=>{
      history.pushState(null, null!, location.href);
    })
  }

  bloquearBotones(){
    this.buttomsBlock = 'comprador';
    this.emisor.setvalidButtoms(this.buttomsBlock);
  }


  public guardarYContinuarMovil(){
    if (this.cliente.nombres == null || this.cliente.nombres == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
        
      })
      this.bloquearBotones();
    } else if (this.cliente.apellidos == null || this.cliente.apellidos == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
      this.bloquearBotones();
    } else if (this.cliente.cedula == null || this.cliente.cedula == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
      this.bloquearBotones();
    } else if (this.cliente.estado_civil == null || this.cliente.estado_civil == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
      this.bloquearBotones();
    } else if (this.cliente.direccion == null || this.cliente.direccion == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
      this.bloquearBotones();
    } else if (this.cliente.celular == null || this.cliente.celular == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
      this.bloquearBotones();
    } else if (this.cliente.email == null || this.cliente.email == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
      this.bloquearBotones();
    } else if (this.cliente.empresa == null || this.cliente.empresa == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
      this.bloquearBotones();
    } else if (this.cliente.cargo == null || this.cliente.cargo == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
      this.bloquearBotones();
    } else if (this.cliente.tiempo_servicio == null || this.cliente.tiempo_servicio == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
    } else if (this.cliente.salario == null || this.cliente.salario == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
      this.bloquearBotones();
    } else if (this.cliente.tipo_casa == null || this.cliente.tipo_casa == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
      this.bloquearBotones();
    } else if (this.cliente.nombre_pariente == null || this.cliente.nombre_pariente == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
      this.bloquearBotones();
    } else if (this.cliente.direccion == null || this.cliente.direccion == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
      this.bloquearBotones();
    } else if (this.cliente.telefono_pariente == null || this.cliente.telefono_pariente == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
      this.bloquearBotones();
    } else {
      this.emisorMovil.guardarCliente(this.cliente);
      
      Swal.fire({
        position:'top-end',
        icon:'success',
        title:'Datos Guardados Exitosamente',
        showConfirmButton: false,
        timer:2000
      })
      this.bloquearBotones();
      this.credito.print();
      this.router.navigate(['/solicitud-credito/' + this.solicitudId + '/codeudor']);
    }


    
  }


}
