import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
import { SolicituCreditoClienteEmisorService } from './solicitu-credito-cliente-emisor.service';

@Injectable({
  providedIn: 'root'
})
export class CreditoService {

  cliente: any = {};

  codeudor: any = {};

  referenciasComercilaes: any = []
  referenciasPersonales: any = []

  RefComerComprador: any = []
  RefComerCodeudor: any = []

  RefPersoComprador: any = []
  RefPersoCodeudor: any = []

  documentos = {
    "dataCredito": false,
    "datosPersonales": false,
    "cedula_ciudadania": [],
    "foto": {}
  }



  solicitudCredito = {
    "id": null,
    "cliente": {},
    "codeudor": {},
    "referencias":{
      "referencias_comerciales":[],
      "referencias_personales":[]
    },
    "documentos": {}
  }

  cedulas: any = []

  solicitudId: any;

  cedula_ciudadania = {
    frente_cedula: '',
    respaldo_cedula: '',
    propietario: ''
  }

  foto = {
    "foto": ''
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
    this.cedula_ciudadania.frente_cedula = cedula;


  }

  public guardarRespaldoCedula(cedula: any, quien: any) {
    this.cedula_ciudadania.respaldo_cedula = cedula;
    this.cedula_ciudadania.propietario = quien;
    console.log(this.cedula_ciudadania);
    this.cedulas.push(this.cedula_ciudadania);
    this.cedula_ciudadania = {
      frente_cedula: '',
      respaldo_cedula: '',
      propietario: ''
    }

  }

  public guardarFoto(foto: any) {
    this.foto.foto = foto;
    this.documentos.foto = this.foto;
    this.documentos.cedula_ciudadania = this.cedulas;
    console.log(this.cedulas);

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
  }

  public guardarReferecenciasPersonales(RComprador: any[], RCodeudor: any[]) {
    this.RefPersoComprador = RComprador;
    this.RefPersoCodeudor = RCodeudor;
  }

  public crearSolicitudCredito() {


  }



  public guardarAutorizaciones(datacrediot: any, datospersonales: any) {
    this.documentos.dataCredito = datacrediot;
    this.documentos.datosPersonales = datospersonales;


  }

  public guardarTodo() {

    //agregamos las referencias comerciales del comprador y codeudor en un array
    this.referenciasComercilaes.push(this.RefComerComprador);
    this.referenciasComercilaes.push(this.RefComerCodeudor);

    //agregamos las referencias comerciales del comprador y codeudor en un array
    this.referenciasPersonales.push(this.RefPersoComprador);
    this.referenciasPersonales.push(this.RefComerCodeudor);

    this.solicitudCredito.cliente = this.cliente;
    this.solicitudCredito.id = this.emisor.getId();
    this.solicitudCredito.cliente = this.cliente;
    this.solicitudCredito.codeudor = this.codeudor;
    this.solicitudCredito.referencias.referencias_comerciales = this.referenciasComercilaes;
    this.solicitudCredito.referencias.referencias_personales = this.referenciasPersonales;

    this.solicitudCredito.documentos = this.documentos;
    console.log(this.solicitudCredito)
    
  }

  public enviarSolicitud(){
    return this.http.post(`${baseUrl}/solicitud-cliente/`, this.solicitudCredito);
  }
}
