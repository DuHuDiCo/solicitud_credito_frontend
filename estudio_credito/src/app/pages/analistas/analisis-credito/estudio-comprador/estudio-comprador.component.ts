import { Component, OnInit, ViewChild, ElementRef, Renderer2, } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AnalistaEmisorService } from 'src/app/services/analista-emisor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-estudio-comprador',
  templateUrl: './estudio-comprador.component.html',
  styleUrls: ['./estudio-comprador.component.css']
})
export class EstudioCompradorComponent implements OnInit {
  @ViewChild("frente")
  img1!: ElementRef<HTMLImageElement>;
  @ViewChild("respaldo")
  img2!: ElementRef<HTMLImageElement>;
  solicitudId: any;


  @ViewChild("observacion_comprador")
  ObserCom!: ElementRef<HTMLImageElement>;
  @ViewChild("txt_observacion_comprador")
  txtObserCom!: ElementRef<HTMLImageElement>;


  @ViewChild("foto")
  img3!: ElementRef<HTMLImageElement>;


  @ViewChild("txtComercial")
  txtComercial!: ElementRef<HTMLImageElement>;
  @ViewChild("btnComercial")
  btnComercial!: ElementRef<HTMLImageElement>;

  @ViewChild("txtPersonal")
  txtPersonal!: ElementRef<HTMLImageElement>;
  @ViewChild("btnPersonal")
  btnPersonal!: ElementRef<HTMLImageElement>;


  cedula: any = {
    "frente": '',
    "respaldo": ''
  }
  base: any = "data:image/png;base64,"

  cliente: any = {
    "id": '',
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
    "salario": '',
    "otros_ingresos": '',
    "valor_otros_ingresos": '',
    "tipo_casa": '',
    "valor_alquiler": '',
    "propietario": '',
    "telefono_casa": '',
    "nombre_conyuge": '',
    "trabajo_conyuge": '',
    "direccion_trabajo_conyuge": '',
    "telefono_trabajo_conyuge": '',
    "nombre_pariente": '',
    "direccion_pariente": '',
    "telefono_pariente": '',
    "cedula_ciudadania_cliente": {
      "frente_cedula": '',
      "respaldo_cedula": ''
    },
    "referencias_comerciales": [],
    "referencias_personales": []
  }

  documentos: any = {
    "id": '',
    "dataCredito": {

    },
    "datosPersonales": {},
    "foto": {}
  }

  referencias_comerciales_cliente: any = {
    "observacion": ''
  }

  referencias_personales_cliente: any = {
    "observacion": ''
  }


  referencias_comerciales: any = []
  referencias_personales: any = []

  frente: any;
  respaldo: any;
  frente_img: any;
  foto: any;
  obsevaciones_comprador: any;




  constructor(private emisor: AnalistaEmisorService, private toast: NgToastService, private render2: Renderer2, private router: Router) { }

  ngOnInit(): void {

    this.solicitudId = this.emisor.getSolicitudId();
    this.cliente = this.emisor.getClienteSolicitud();
    this.documentos = this.emisor.getDocumentos();
    

    this.frente = this.base + this.cliente.cedula_ciudadania_cliente.frente_cedula;
    this.respaldo = this.base + this.cliente.cedula_ciudadania_cliente.respaldo_cedula;
    this.foto = this.base + this.documentos.foto.foto;
    setTimeout(() => {
      this.cedulas();
    }, 4000);
  }

  public cedulas() {
    var frente = this.img1.nativeElement;
    this.render2.setAttribute(frente, 'src', this.frente)

    var respaldo = this.img2.nativeElement;
    this.render2.setAttribute(respaldo, 'src', this.respaldo);

    var foto = this.img3.nativeElement;
    this.render2.setAttribute(foto, 'src', this.foto);
  }


  public guardarObservacionCliente() {
    if (this.obsevaciones_comprador == '' || this.obsevaciones_comprador == null) {
      this.toast.error({
        detail: "Error",
        summary: "el campo observaciones esta vacio",
        position: "tr",
        duration: 3500
      })
    } else {
      this.emisor.setObservacionCliente(this.obsevaciones_comprador);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Datos Guardados Exitosamente',
        showConfirmButton: false,
        timer: 2000
      })
      var button = this.ObserCom.nativeElement;
      var txtObse = this.txtObserCom.nativeElement;
      this.render2.setAttribute(button, 'disabled', 'true')
      this.render2.setAttribute(txtObse, 'disabled', 'true')

    }

  }

  public guardarReferenciasComercialesCliente() {
    if (this.referencias_comerciales_cliente.observacion == '' || this.referencias_comerciales_cliente.observacion == null) {
      this.toast.error({
        detail: "Error",
        summary: "el campo referencia comerciales esta vacio",
        position: "tr",
        duration: 3500
      })

    } else {
      this.referencias_comerciales.push(this.referencias_comerciales_cliente);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Datos Guardados Exitosamente',
        showConfirmButton: false,
        timer: 2000
      })
      var txtComercial = this.txtComercial.nativeElement;
      var btnComercial = this.btnComercial.nativeElement;
      this.render2.setAttribute(txtComercial, 'disabled', 'true')
      this.render2.setAttribute(btnComercial, 'disabled', 'true')
    }
  }



  public guardarReferenciasPersonalesCliente() {
    if (this.referencias_comerciales_cliente.observacion == '' || this.referencias_comerciales_cliente.observacion == null) {
      this.toast.error({
        detail: "Error",
        summary: "el campo referencia comerciales esta vacio",
        position: "tr",
        duration: 3500
      })

    } else {
      this.referencias_personales.push(this.referencias_personales_cliente);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Datos Guardados Exitosamente',
        showConfirmButton: false,
        timer: 2000
      })
      var txtPersonal = this.txtPersonal.nativeElement;
      var btnPersonal = this.btnPersonal.nativeElement;
      this.render2.setAttribute(txtPersonal, 'disabled', 'true')
      this.render2.setAttribute(btnPersonal, 'disabled', 'true')
    }
  }

  public enviarReferencias() {
    
    this.emisor.setReferencias(this.referencias_comerciales, this.referencias_personales);
    this.router.navigate(['/analista/solicitud/' + this.solicitudId + '/estudio-codeudor']);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Datos Guardados Exitosamente',
      showConfirmButton: false,
      timer: 2000
    })
  }


}
