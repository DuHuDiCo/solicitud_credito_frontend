import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CreditoService } from 'src/app/services/credito.service';
import { SolicituCreditoClienteEmisorService } from 'src/app/services/solicitu-credito-cliente-emisor.service';
import Swal from 'sweetalert2';
import { DomSanitizer } from '@angular/platform-browser';
import { SolicitudClienteMovilEmisorService } from 'src/app/services/solicitud-cliente-movil-emisor.service';


@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css'],

})
export class DocumentosComponent implements OnInit {

  solicitudId: any;
  dataCredito = {
    "autorizacion": false,
    "fecha": '',
  }
  datosPersonales = {
    "autorizacion": false,
    "fecha": '',
  }

  docs = {
    "dataCredito": false,
    "datosPersonales": false,
    "cedula_ciudadania_comprador": {},
    "cedula_ciudadania_codeudor": {},
    "foto": {}
  }

  docsMovil: any = {
    "dataCredito": false,
    "datosPersonales": false,
    "cedula_ciudadania_comprador": {
      "frente_cedula": '',
      "respaldo_cedula": ''
    },
    "cedula_ciudadania_codeudor": {
      "frente_cedula": '',
      "respaldo_cedula": ''
    },
    "foto": {}
  }

  valid = true;

  constructor(private emisor: SolicituCreditoClienteEmisorService, private emisorMovil: SolicitudClienteMovilEmisorService, private sanitizer: DomSanitizer, private router: Router, private toast: NgToastService, private credito: CreditoService, private solicitudCredito: CreditoService, private renderer2: Renderer2, @Inject(PLATFORM_ID) private _platform: Object) { }

  ngOnInit(): void {

  }

  public enviarSolicitud() {
    Swal.fire({
      title: '¿Quieres Guardar Y Enviar Todo?',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Confirmar',
      confirmButtonColor: '#960010',
      cancelButtonText: 'Cancelar',
      icon: 'info'
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.credito.guardarTodo();

        this.credito.enviarSolicitud().subscribe(
          (data: any) => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Solicitud Creada exitosamente',
              showConfirmButton: false,
              timer: 2000
            });
            this.router.navigate(['/success']);
          }, (error: any) => {
            console.log(error);
          }
        );
      }
    })



  }

  public guardarSeccion() {

    if (this.dataCredito.autorizacion == false || this.datosPersonales.autorizacion == false) {
      this.toast.error({
        detail: "Error",
        summary: "Debes Aceptar las Autorizaciones",
        position: "tr",
        duration: 3500
      })


    } else {
      this.docs = this.credito.getDocs();
      console.log(this.docs);

      if (Object.keys(this.docs.cedula_ciudadania_comprador).length == 0 || Object.keys(this.docs.cedula_ciudadania_comprador).length == 0 || this.docs.foto == null) {
        this.toast.error({
          detail: "Error",
          summary: "Debes Tomar la foto de cedula y rostro",
          position: "tr",
          duration: 3500
        })
      } else {
        this.credito.guardarAutorizaciones(this.dataCredito, this.datosPersonales);
        this.valid = false;
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Documentos Guardados',
          showConfirmButton: false,
          timer: 2000
        });
      }

    }

  }

  public obtenerFechaActual() {
    let date = new Date();
    let mes = date.getMonth() + 1;
    let fecha = date.getFullYear() + '-' + mes + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    return fecha;
  }


  public capturarFrenteCedulaCliente(event: any) {
    var archivo = event.target.files[0];
    this.extraerBase64(archivo).then((imagen: any) => {
      this.docsMovil.cedula_ciudadania_comprador.frente_cedula = imagen.base;
    })
  }

  public capturarRespaldoCedulaCliente(event: any) {
    var archivo = event.target.files[0];
    this.extraerBase64(archivo).then((imagen: any) => {
      this.docsMovil.cedula_ciudadania_comprador.respaldo_cedula = imagen.base;
    })
  }

  public capturarFrenteCedulaCodeudor(event: any) {
    var archivo = event.target.files[0];
    this.extraerBase64(archivo).then((imagen: any) => {
      this.docsMovil.cedula_ciudadania_codeudor.frente_cedula = imagen.base;
    })
  }

  public capturarRespaldoCedulaCodeudor(event: any) {
    var archivo = event.target.files[0];
    this.extraerBase64(archivo).then((imagen: any) => {
      this.docsMovil.cedula_ciudadania_codeudor.respaldo_cedula = imagen.base;
    })
  }

  public capturarFoto(event: any) {
    var archivo = event.target.files[0];
    this.extraerBase64(archivo).then((imagen: any) => {
      this.docsMovil.foto = imagen.base;
    })
  }



  public extraerBase64 = async ($event: any) => new Promise((resolve, reject): any => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      return null;
    }
  })

  public guardarSeccionMovil() {

    if (this.docsMovil.dataCredito == false) {
      this.toast.error({
        detail: "Error",
        summary: "la autorizacion de data credito esta vacia",
        position: "tr",
        duration: 3500
      })
    }

    if (this.docsMovil.datosPersonales == false) {
      this.toast.error({
        detail: "Error",
        summary: "la autorizacion de datos personales esta vacia",
        position: "tr",
        duration: 3500
      })
    }

    if (this.docsMovil.cedula_ciudadania_comprador.frente_cedula == '' && this.docsMovil.cedula_ciudadania_comprador.respaldo_cedula == '') {
      this.toast.error({
        detail: "Error",
        summary: "La cedula del comprador esta vacia",
        position: "tr",
        duration: 3500
      })
    }

    if (this.docsMovil.cedula_ciudadania_codeudor.frente_cedula == '' && this.docsMovil.cedula_ciudadania_codeudor.respaldo_cedula == '') {
      this.toast.error({
        detail: "Error",
        summary: "La cedula del codeudor esta vacia",
        position: "tr",
        duration: 3500
      })
    }

    if (Object.keys(this.docsMovil.foto).length == 0) {
      this.toast.error({
        detail: "Error",
        summary: "La foto del comprador esta vacia",
        position: "tr",
        duration: 3500
      })
    } else {
      this.emisorMovil.guardarDocs(this.docsMovil);
      this.valid = false;


    }



  }


  public enviarSolicitudMovil() {


    if (this.emisorMovil.getCedulaCliente() === '') {
      this.toast.error({
        detail: "Error",
        summary: "Faltan Datos en los Anteriores Apartados",
        position: "tr",
        duration: 3500
      })
    } else {
      if (this.emisorMovil.getCedulaCodeudor() == '') {
        this.toast.error({
          detail: "Error",
          summary: "Faltan Datos en los Anteriores Apartados",
          position: "tr",
          duration: 3500
        })
      } else {
        this.emisorMovil.guardarSolicitud();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Datos Guardados Exitosamente',
          showConfirmButton: false,
          timer: 2000
        })
        this.router.navigate(['/success'])
      }

    }

    
  }


}
