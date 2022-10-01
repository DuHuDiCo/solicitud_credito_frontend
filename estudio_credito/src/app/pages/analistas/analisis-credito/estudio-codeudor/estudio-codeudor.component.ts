import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AnalistaEmisorService } from 'src/app/services/analista-emisor.service';

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

  constructor(private emisor:AnalistaEmisorService, private render2:Renderer2, private router:Router) { }

  ngOnInit(): void {
    this.solicitudId = this.emisor.getSolicitudId();
    console.log(this.solicitudId);
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
    this.emisor.setObservacionCodeudor(this.observacion_codeudor);
  }

  public guardarReferenciasComercialesCodeudor(){
    this.referencias_comerciales.push(this.referencias_comerciales_codeudor);
  }

  public guardarReferenciasPersonalesCodeudor(){
    this.referencias_personales.push(this.referencias_personales_codeudor);
  }

  public enviarReferenciasCodeudor(){
    this.emisor.setReferenciasCodeudor(this.referencias_comerciales, this.referencias_personales);
    this.router.navigate(['/analista/solicitud/'+this.solicitudId+'/estudio-autorizaciones']);
  }
}
