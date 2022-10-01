import { Component, OnInit , ViewChild, ElementRef, Renderer2,} from '@angular/core';
import { Router } from '@angular/router';
import { AnalistaEmisorService } from 'src/app/services/analista-emisor.service';

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

  @ViewChild("foto")
  img3!: ElementRef<HTMLImageElement>;

  cedula:any={
    "frente":'',
    "respaldo":''
  }
   base:any = "data:image/png;base64,"

  cliente:any= {
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
    "cedula_ciudadania_cliente": {
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

  referencias_comerciales_cliente:any={
    "observacion":''
  }

  referencias_personales_cliente:any={
    "observacion":''
  }


  referencias_comerciales:any=[]
  referencias_personales:any=[]

  frente:any;
  respaldo:any;
  frente_img:any;
  foto:any;
  obsevaciones_comprador:any;

  


  constructor(private emisor: AnalistaEmisorService, private render2:Renderer2, private router:Router) { }

  ngOnInit(): void {
    
    this.solicitudId = this.emisor.getSolicitudId();
    this.cliente = this.emisor.getClienteSolicitud();
    this.documentos = this.emisor.getDocumentos();
    console.log(this.cliente);
    
    this.frente = this.base+this.cliente.cedula_ciudadania_cliente.frente_cedula;
    this.respaldo = this.base+this.cliente.cedula_ciudadania_cliente.respaldo_cedula;
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

    var foto = this.img3.nativeElement;
    this.render2.setAttribute(foto, 'src', this.foto);
  }
  

  public guardarObservacionCliente(){
    this.emisor.setObservacionCliente(this.obsevaciones_comprador);
  }

  public guardarReferenciasComercialesCliente(){
    this.referencias_comerciales.push(this.referencias_comerciales_cliente);
  }


  public guardarReferenciasPersonalesCliente(){
    this.referencias_personales.push(this.referencias_personales_cliente);
  }

  public enviarReferencias(){
    this.emisor.setReferencias(this.referencias_comerciales, this.referencias_personales);
    this.router.navigate(['/analista/solicitud/'+this.solicitudId+'/estudio-codeudor']);
  }
  

}
