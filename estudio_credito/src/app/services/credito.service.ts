import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
import { SolicituCreditoClienteEmisorService } from './solicitu-credito-cliente-emisor.service';

@Injectable({
  providedIn: 'root'
})
export class CreditoService {

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

  documentos = {
    "dataCredito": false,
    "datosPersonales": false,
    "cedula_ciudadania_comprador": {},
    "cedula_ciudadania_codeudor":{},
    "foto": {}
  }

  docs={
    "dataCredito": false,
    "datosPersonales": false,
    "foto": {}
  }



  solicitudCredito = {
    "id": null,
    "cliente": {},
    "codeudor": {},
    "documentos": {},
    "referencias_comerciales":{
      "referencias_comerciales_comprador":'',
      "referencias_comerciales_codeudor":''
    },
    "referencias_personales":{
      "referencias_personales_comprador":'',
      "referencias_personales_codeudor":''
    }
  }

  cedulas: any = []

  solicitudId: any;

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

  referencias_comerciales_comprador={
    "nombre": '',
    "telefono": ''
  }
  referencias_comerciales_codeudor={
    "nombre": '',
    "telefono": ''
  }


  constructor(private http: HttpClient, private emisor: SolicituCreditoClienteEmisorService) { }


  public getCliente() {
    return this.cliente;
  }

  public getCodeudor() {
    return this.codeudor;
  }

  public getReferenciasComerciales() {
    return this.referenciasComercilaes;
  }


  public getReferenciasPersonales() {
    return this.referenciasPersonales;
  }


  public crearSolicituCredito(venta: any[]) {

    return this.http.post(`${baseUrl}/solicitud-vendedor/`, venta);
  }

  public obtenerSolicitudesCredito() {
    return this.http.get(`${baseUrl}/solicitud-vendedor/all`);
  }

  public guardarFrenteCedula(cedula: any) {
    this.cedula_ciudadania_comprador.frente_cedula = cedula;


  }

  public guardarRespaldoCedula(cedula: any, ) {
    this.cedula_ciudadania_comprador.respaldo_cedula = cedula;
    
    console.log(this.cedula_ciudadania_comprador);
    this.documentos.cedula_ciudadania_comprador = this.cedula_ciudadania_comprador;
    this.cedula_ciudadania_comprador = {
      frente_cedula: '',
      respaldo_cedula: ''
    }

  }

  public guardarFoto(foto: any) {
    this.foto.foto = foto;
    this.documentos.foto = this.foto;
    
    
   
  }

  public guardarFrenteCedulaCodeudor(cedula: any) {
    this.cedula_ciudadania_codeudor.frente_cedula = cedula;


  }

  public guardarRespaldoCedulaCodeudor(cedula: any, ) {
    this.cedula_ciudadania_codeudor.respaldo_cedula = cedula;
    
    console.log(this.cedula_ciudadania_comprador);
    this.documentos.cedula_ciudadania_codeudor = this.cedula_ciudadania_codeudor;
    this.cedula_ciudadania_comprador = {
      frente_cedula: '',
      respaldo_cedula: ''
    }

  }

  

  public guardarFile(photo: any) {
    return this.http.post(`${baseUrl}/files/picture`, photo);
  }


  public guardarCliente(cliente: any) {
    this.cliente = cliente;
  }
  public guardarCodeudor(codeudor: any) {
    this.codeudor = codeudor;
  }

  public getDocs() {
    return this.documentos;
  }

  public print() {

  }

  public guardarReferenciasComerciales(RComprador: any[], RCodeudor: any[]) {
    this.RefComerComprador = RComprador;
    this.RefComerCodeudor = RCodeudor;
    console.log(this.RefComerComprador)
    console.log(this.RefComerCodeudor)
  }

  public guardarReferecenciasPersonales(RComprador: any[], RCodeudor: any[]) {
    this.RefPersoComprador = RComprador;
    this.RefPersoCodeudor = RCodeudor;
    console.log(this.RefPersoComprador)
    console.log(this.RefPersoCodeudor)
  }

  public crearSolicitudCredito() {


  }



  public guardarAutorizaciones(datacrediot: any, datospersonales: any) {
    this.documentos.dataCredito = datacrediot;
    this.documentos.datosPersonales = datospersonales;
    this.cliente.cedula_ciudadania_cliente = this.documentos.cedula_ciudadania_comprador;
    this.codeudor.cedula_ciudadania_codeudor = this.documentos.cedula_ciudadania_codeudor;
    

  }

  public guardarTodo() {

 

   
    this.solicitudCredito.cliente = this.cliente;
    this.solicitudCredito.id = this.emisor.getId();
    
    this.solicitudCredito.codeudor = this.codeudor;
    
    this.docs.dataCredito = this.documentos.dataCredito;
    this.docs.datosPersonales = this.documentos.datosPersonales;
    this.docs.foto = this.documentos.foto;
    this.solicitudCredito.documentos = this.docs;

    this.solicitudCredito.referencias_comerciales.referencias_comerciales_comprador = this.RefComerComprador;
    this.solicitudCredito.referencias_comerciales.referencias_comerciales_codeudor = this.RefComerCodeudor;
    
    this.solicitudCredito.referencias_personales.referencias_personales_comprador = this.RefPersoComprador;
    this.solicitudCredito.referencias_personales.referencias_personales_codeudor = this.RefPersoCodeudor;
    
    console.log(this.solicitudCredito)
    
  }

  public enviarSolicitud(){
    return this.http.post(`${baseUrl}/solicitud-cliente/`, this.solicitudCredito);
  }
}
