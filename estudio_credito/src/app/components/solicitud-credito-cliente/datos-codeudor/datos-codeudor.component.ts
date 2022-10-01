import { Component, OnInit } from '@angular/core';
import { CreditoService } from 'src/app/services/credito.service';
import { SolicituCreditoClienteEmisorService } from 'src/app/services/solicitu-credito-cliente-emisor.service';
import { LocationStrategy } from '@angular/common';
import { NgToastService } from 'ng-angular-popup';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { SolicitudClienteMovilEmisorService } from 'src/app/services/solicitud-cliente-movil-emisor.service';
@Component({
  selector: 'app-datos-codeudor',
  templateUrl: './datos-codeudor.component.html',
  styleUrls: ['./datos-codeudor.component.css']
})
export class DatosCodeudorComponent implements OnInit {

  solicitudId: any;

  codeudor = {
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

  constructor(private emison: SolicituCreditoClienteEmisorService, private emisorMovil:SolicitudClienteMovilEmisorService,private toast: NgToastService, private credito: CreditoService, private locationSt: LocationStrategy, private router: Router) { }

  ngOnInit(): void {
    this.solicitudId = this.emison.getId();
    this.emison.tomarId(this.solicitudId);
    this.credito.print();
    this.prevenirRetroceso();
  }

  prevenirRetroceso() {
    history.pushState(null, null!, location.href);
    this.locationSt.onPopState(() => {
      history.pushState(null, null!, location.href);
    })
  }

  public guardarYContinuar() {
    if (this.codeudor.nombres == null || this.codeudor.nombres == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500

      })

    } else if (this.codeudor.apellidos == null || this.codeudor.apellidos == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })

    } else if (this.codeudor.cedula == null || this.codeudor.cedula == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
    } else if (this.codeudor.estado_civil == null || this.codeudor.estado_civil == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
    } else if (this.codeudor.direccion == null || this.codeudor.direccion == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })

    } else if (this.codeudor.celular == null || this.codeudor.celular == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })

    } else if (this.codeudor.email == null || this.codeudor.email == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })

    } else if (this.codeudor.empresa == null || this.codeudor.empresa == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })

    } else if (this.codeudor.cargo == null || this.codeudor.cargo == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })

    } else if (this.codeudor.tiempo_servicio == null || this.codeudor.tiempo_servicio == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
    } else if (this.codeudor.salario == null || this.codeudor.salario == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })

    } else if (this.codeudor.tipo_casa == null || this.codeudor.tipo_casa == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })

    } else if (this.codeudor.nombre_pariente == null || this.codeudor.nombre_pariente == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })

    } else if (this.codeudor.direccion == null || this.codeudor.direccion == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })

    } else if (this.codeudor.telefono_pariente == null || this.codeudor.telefono_pariente == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })

    } else {
      this.credito.guardarCodeudor(this.codeudor);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Datos Guardados Exitosamente',
        showConfirmButton: false,
        timer: 2000
      })
      this.credito.print();
      this.router.navigate(['/solicitud-credito/' + this.solicitudId + '/referencias-comerciales']);
    }
  }


  public goBack() {
    if (this.codeudor.nombres == null || this.codeudor.nombres == '') {
      this.router.navigate(['/solicitud-credito/' + this.solicitudId + '/comprador']);

    } else {
      Swal.fire({
        title: 'Advertencia',
        text: 'Tienes Cambios sin Guardar, ¿deseas Guardarlos?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Guardar',
        cancelButtonText: 'Cancelar'
      }).then((result: any) => {
        if (result.isConfirmed) {
          if (this.validar()) {
            this.credito.guardarCodeudor(this.codeudor);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Datos Guardados Exitosamente',
              showConfirmButton: false,
              timer: 2000
            })
            this.router.navigate(['/solicitud-credito/' + this.solicitudId + '/comprador']);
          }else{
            this.toast.error({
              detail: "Error",
              summary: "existen campos vacios",
              position: "tr",
              duration: 3500
            })
          }

        }
      })

    }
  }


  public guardarYContinuarMovil(){
    if (this.codeudor.nombres == null || this.codeudor.nombres == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500

      })

    } else if (this.codeudor.apellidos == null || this.codeudor.apellidos == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })

    } else if (this.codeudor.cedula == null || this.codeudor.cedula == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
    } else if (this.codeudor.estado_civil == null || this.codeudor.estado_civil == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
    } else if (this.codeudor.direccion == null || this.codeudor.direccion == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })

    } else if (this.codeudor.celular == null || this.codeudor.celular == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })

    } else if (this.codeudor.email == null || this.codeudor.email == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })

    } else if (this.codeudor.empresa == null || this.codeudor.empresa == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })

    } else if (this.codeudor.cargo == null || this.codeudor.cargo == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })

    } else if (this.codeudor.tiempo_servicio == null || this.codeudor.tiempo_servicio == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
    } else if (this.codeudor.salario == null || this.codeudor.salario == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })

    } else if (this.codeudor.tipo_casa == null || this.codeudor.tipo_casa == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })

    } else if (this.codeudor.nombre_pariente == null || this.codeudor.nombre_pariente == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })

    } else if (this.codeudor.direccion == null || this.codeudor.direccion == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })

    } else if (this.codeudor.telefono_pariente == null || this.codeudor.telefono_pariente == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })

    } else {
      this.emisorMovil.guardarCodeudor(this.codeudor);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Datos Guardados Exitosamente',
        showConfirmButton: false,
        timer: 2000
      })
      
      this.router.navigate(['/solicitud-credito/' + this.solicitudId + '/referencias-comerciales']);
    }
  }


  public validar(): any {
    if (this.codeudor.apellidos == null || this.codeudor.apellidos == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })

    } else if (this.codeudor.cedula == null || this.codeudor.cedula == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
    } else if (this.codeudor.estado_civil == null || this.codeudor.estado_civil == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
    } else if (this.codeudor.direccion == null || this.codeudor.direccion == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })

    } else if (this.codeudor.celular == null || this.codeudor.celular == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })

    } else if (this.codeudor.email == null || this.codeudor.email == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })

    } else if (this.codeudor.empresa == null || this.codeudor.empresa == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })

    } else if (this.codeudor.cargo == null || this.codeudor.cargo == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })

    } else if (this.codeudor.tiempo_servicio == null || this.codeudor.tiempo_servicio == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
    } else if (this.codeudor.salario == null || this.codeudor.salario == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })

    } else if (this.codeudor.tipo_casa == null || this.codeudor.tipo_casa == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })

    } else if (this.codeudor.nombre_pariente == null || this.codeudor.nombre_pariente == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })

    } else if (this.codeudor.direccion == null || this.codeudor.direccion == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })

    } else if (this.codeudor.telefono_pariente == null || this.codeudor.telefono_pariente == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })

    } else {
      return true;
    }
  }


}
