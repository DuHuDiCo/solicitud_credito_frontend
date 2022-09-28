import { Component, OnInit , ViewChild, ElementRef, Renderer2,} from '@angular/core';
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
  frente:any;
  respaldo:any;
  frente_img:any;

  constructor(private emisor: AnalistaEmisorService, private render2:Renderer2) { }

  ngOnInit(): void {
    
    this.solicitudId = this.emisor.getSolicitudId();
    this.cliente = this.emisor.getClienteSolicitud();
    console.log(this.cliente);
    
    this.frente = this.base+this.cliente.cedula_ciudadania_cliente.frente_cedula;
    this.respaldo = this.base+this.cliente.cedula_ciudadania_cliente.respaldo_cedula;
    setTimeout(() => {
        this.cedulas();
    }, 4000);
  }

  public cedulas(){
    var frente = this.img1.nativeElement;
    this.render2.setAttribute(frente, 'src', this.frente)
  }

  

}
