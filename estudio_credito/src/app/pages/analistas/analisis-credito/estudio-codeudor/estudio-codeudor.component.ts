import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AnalistaEmisorService } from 'src/app/services/analista-emisor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-estudio-codeudor',
  templateUrl: './estudio-codeudor.component.html',
  styleUrls: ['./estudio-codeudor.component.css']
})
export class EstudioCodeudorComponent implements OnInit {
  @ViewChild("frente")
  img1!: ElementRef<HTMLImageElement>;
  @ViewChild("respaldo")
  img2!: ElementRef<HTMLImageElement>;
  solicitudId:any;

  base:any = "data:image/png;base64,"


  @ViewChild("btn_observacion_codeudor")
  ObserCod!: ElementRef<HTMLImageElement>;
  @ViewChild("txt_observacion_codeudor")
  txtObserCod!: ElementRef<HTMLImageElement>;


  

  @ViewChild("txtComercialCod")
  txtComercial!: ElementRef<HTMLImageElement>;
  @ViewChild("btnComercialCod")
  btnComercial!: ElementRef<HTMLImageElement>;

  @ViewChild("txtPersonalCod")
  txtPersonal!: ElementRef<HTMLImageElement>;
  @ViewChild("btnPersonalCod")
  btnPersonal!: ElementRef<HTMLImageElement>;

  
  codeudor:any = {
    "id":'',
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
    "cedula_ciudadania_codeudor": {
      "frente_cedula":'',
      "respaldo_cedula": ''
    },
    "referencias_comerciales":[],
    "referencias_personales":[]
  }

  documentos:any={
    "id":'',
    "dataCredito":{
      
    },
    "datosPersonales":{},
    "foto":{}
  }


  frente:any;
  respaldo:any;
  frente_img:any;
  foto:any;

  observacion_codeudor:any;

  referencias_comerciales:any=[]
  referencias_personales:any=[]

  referencias_comerciales_codeudor:any={
    "observacion":''
  }

  referencias_personales_codeudor:any={
    "observacion":''
  }

  constructor(private emisor:AnalistaEmisorService, private toast:NgToastService,private render2:Renderer2, private router:Router) { }

  ngOnInit(): void {
    this.solicitudId = this.emisor.getSolicitudId();
    
    this.codeudor = this.emisor.getCodeudor();
    this.documentos = this.emisor.getDocumentos();
    
    
    this.frente = this.base+this.codeudor.cedula_ciudadania_codeudor.frente_cedula;
    this.respaldo = this.base+this.codeudor.cedula_ciudadania_codeudor.respaldo_cedula;
    this.foto = this.base+this.documentos.foto.foto;
    setTimeout(() => {
        this.cedulas();
    }, 4000);
  }

  public cedulas(){
    var frente = this.img1.nativeElement;
    this.render2.setAttribute(frente, 'src', this.frente)

    var respaldo = this.img2.nativeElement;
    this.render2.setAttribute(respaldo, 'src', this.respaldo);

  } 

  public guardarObservacionCodeudor(){
    if (this.observacion_codeudor == '' || this.observacion_codeudor == null) {
      this.toast.error({
        detail: "Error",
        summary: "el campo observaciones esta vacio",
        position: "tr",
        duration: 3500
      })
    } else {
      this.emisor.setObservacionCodeudor(this.observacion_codeudor);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Datos Guardados Exitosamente',
        showConfirmButton: false,
        timer: 2000
      })
      var button = this.ObserCod.nativeElement;
      var txtObse = this.txtObserCod.nativeElement;
      this.render2.setAttribute(button, 'disabled', 'true')
      this.render2.setAttribute(txtObse, 'disabled', 'true')
    }
    
  }

  public guardarReferenciasComercialesCodeudor(){
    if (this.referencias_comerciales_codeudor.observacion  == '' || this.referencias_comerciales_codeudor.observacion == null) {
      this.toast.error({
        detail: "Error",
        summary: "el campo referencias comerciales esta vacio",
        position: "tr",
        duration: 3500
      })
    } else {
      this.referencias_comerciales.push(this.referencias_comerciales_codeudor);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Datos Guardados Exitosamente',
        showConfirmButton: false,
        timer: 2000
      })
      var button = this.txtComercial.nativeElement;
      var txtObse = this.btnComercial.nativeElement;
      this.render2.setAttribute(button, 'disabled', 'true')
      this.render2.setAttribute(txtObse, 'disabled', 'true')
    }
    
  }

  public guardarReferenciasPersonalesCodeudor(){
    if (this.referencias_personales_codeudor.observacion  == '' || this.referencias_personales_codeudor.observacion == null) {
      this.toast.error({
        detail: "Error",
        summary: "el campo referencias personales esta vacio",
        position: "tr",
        duration: 3500
      })
    } else {
      this.referencias_personales.push(this.referencias_personales_codeudor);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Datos Guardados Exitosamente',
        showConfirmButton: false,
        timer: 2000
      })
      var button = this.txtPersonal.nativeElement;
      var txtObse = this.btnPersonal.nativeElement;
      this.render2.setAttribute(button, 'disabled', 'true')
      this.render2.setAttribute(txtObse, 'disabled', 'true')
    }
    
  }

  public enviarReferenciasCodeudor(){
    this.emisor.setReferenciasCodeudor(this.referencias_comerciales, this.referencias_personales);
    this.router.navigate(['/analista/solicitud/'+this.solicitudId+'/estudio-autorizaciones']);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Datos Guardados Exitosamente',
      showConfirmButton: false,
      timer: 2000
    })
  }
}
