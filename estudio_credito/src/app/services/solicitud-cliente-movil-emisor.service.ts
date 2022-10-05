import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { SolicitudClienteMovilService } from './solicitud-cliente-movil.service';

@Injectable({
  providedIn: 'root'
})
export class SolicitudClienteMovilEmisorService {
  solicitudId:any;


  cliente:any = {
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
    "telefono_pariente": '',
    "cedula_ciudadania_cliente": {},

  }

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
    "telefono_pariente": '',
    "cedula_ciudadania_codeudor":{},


  }

  referenciasComercilaes: any = []
  referenciasPersonales: any = []

  RefComerComprador: any = []
  RefComerCodeudor: any = []

  RefPersoComprador: any = []
  RefPersoCodeudor: any = []


  solicitudCredito = {
    "id": null,
    "cliente": {},
    "codeudor": {},
    "documentos": {

    },
    "referencias_comerciales":{
      "referencias_comerciales_comprador":'',
      "referencias_comerciales_codeudor":''
    },
    "referencias_personales":{
      "referencias_personales_comprador":'',
      "referencias_personales_codeudor":''
    }
  }

  documentos = {
    "dataCredito": {
      "autorizacion":''
    },
    "datosPersonales": {
      "autorizacion":''
    },
   
    "foto": {
      "foto":''
    }
  }


  cedula_ciudadania_comprador = {
    frente_cedula: '',
    respaldo_cedula: ''
  }

  cedula_ciudadania_codeudor = {
    frente_cedula: '',
    respaldo_cedula: ''
  }

  foto = {
    "foto": ''
  }

  dataCredito:any;
  datosPersonales:any;

  constructor(private solicitudService:SolicitudClienteMovilService) { }

  public setId(id:any){
    this.solicitudId = id;
  }

  public getId(){
    return this.solicitudId;
  }

  public guardarCliente(cliente:any){
    this.cliente = cliente;
    
    
  }


  public guardarCodeudor(code:any){
    this.codeudor = code;
    
  }



  public print(){
    
  }

  public guardarReferenciasComerciales(comerCom:any[], comerCod:any[]){
    this.RefComerComprador = comerCom;
    this.RefComerCodeudor = comerCod;
  }

  public guardarReferenciasPersonales(persoCom:any[], persoCod:any[]){
    this.RefPersoComprador = persoCom;
    this.RefPersoCodeudor = persoCod;
  }

  public guardarDocs(doc:any){
    this.documentos.dataCredito.autorizacion = doc.dataCredito;
    this.documentos.datosPersonales.autorizacion = doc.datosPersonales;
    this.documentos.foto.foto = doc.foto;
    this.solicitudCredito.documentos = this.documentos;
    this.cliente.cedula_ciudadania_cliente = doc.cedula_ciudadania_comprador;
    this.codeudor.cedula_ciudadania_codeudor = doc.cedula_ciudadania_codeudor;
    this.solicitudCredito.cliente = this.cliente;
    this.solicitudCredito.codeudor = this.codeudor;
    this.solicitudCredito.id = this.solicitudId;
    this.solicitudCredito.referencias_comerciales.referencias_comerciales_comprador = this.RefComerComprador;
    this.solicitudCredito.referencias_comerciales.referencias_comerciales_codeudor = this.RefComerCodeudor;
    this.solicitudCredito.referencias_personales.referencias_personales_comprador = this.RefPersoComprador;
    this.solicitudCredito.referencias_personales.referencias_personales_codeudor = this.RefPersoCodeudor;
    

    
  }


  public guardarSolicitud(){
    this.solicitudService.enviarSolicitud(this.solicitudCredito).subscribe(
      (data:any) =>{
       
      },(error:any)=>{
        
      }
    )
  }

  public getSolicitudAnalista(){
    return this.solicitudCredito;
  }

  public getCedulaCliente(){
    return this.cliente.cedula
  }

  public getCedulaCodeudor(){
    return this.codeudor.cedula
  }

  public getReferenciasComercialesCliente(){
    return this.solicitudCredito.referencias_comerciales.referencias_comerciales_comprador;
  }

  
  public getReferenciasComercialesCodeudor(){
    return this.solicitudCredito.referencias_comerciales.referencias_comerciales_codeudor;
  }

  
  public getReferenciasPersonalesCliente(){
    return this.solicitudCredito.referencias_personales.referencias_personales_comprador;
  }

  
  public getReferenciasPersonalesCodeudor(){
    return this.solicitudCredito.referencias_personales.referencias_personales_codeudor;
  }
    
    

}
