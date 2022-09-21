import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CreditoService {

  cliente:any = {};

  codeudor:any = {};

  referenciasComercilaes:any=[]
  referenciasPersonales:any=[]

  RefComerComprador:any = []
  RefComerCodeudor:any = []

  RefPersoComprador:any = []
  RefPersoCodeudor:any = []

  documentos={
    "frenteCedula":null,
    "respaldoCedula":null,
    "foto":null,
    "dataCredito":null,
    "datosPersonales":null
  }

  

  solicitudCredito={
    "id":null,
    "cliente":null,
    "codeudor":null,
    "referenciasComercilaes":null,
    "referenciasPersonales":null,
    "documentos":null
  }



  constructor(private http: HttpClient) { }


  public getCliente(){
    return this.cliente;
  }

  public getCodeudor(){
    return this.codeudor;
  }

  public getReferenciasComerciales(){
    return this.referenciasComercilaes;
  }

  
  public getReferenciasPersonales(){
    return this.referenciasPersonales;
  }

  
  public crearSolicituCredito(venta:any[]){
    console.log(venta);
    return this.http.post(`${baseUrl}/solicitud/`, venta);
  }

  public obtenerSolicitudesCredito(){
    return this.http.get(`${baseUrl}/solicitud/all`);
  }

  public guardarFrenteCedula(cedula:any){
    this.documentos.frenteCedula = cedula;
    
  }

  public guardarRespaldoCedula(cedula:any){
    this.documentos.respaldoCedula = cedula;
    
  }

  public guardarFoto(foto:any){
    this.documentos.foto = foto;
    
  }

  public guardarFile(photo:any){
    return this.http.post(`${baseUrl}/files/picture`, photo);
  }


  public guardarCliente(cliente:any){
    this.cliente = cliente;
  }
  public guardarCodeudor(codeudor:any){
    this.codeudor = codeudor;
  }

  public getDocs(){
    return this.documentos;
  }

  public print(){
    console.log(this.documentos.respaldoCedula);
    console.log(this.documentos.frenteCedula);
    console.log(this.documentos.foto);

  }

  public guardarReferenciasComerciales(RComprador:any[], RCodeudor:any[]){
    this.RefComerComprador = RComprador;
    this.RefComerCodeudor = RCodeudor;
  }

  public guardarReferecenciasPersonales(RComprador:any[], RCodeudor:any[]){
    this.RefPersoComprador = RComprador;
    this.RefPersoCodeudor = RCodeudor;
  }

  public crearSolicitudCredito(){
    //agregamos las referencias comerciales del comprador y codeudor en un array
    this.referenciasComercilaes.push(this.RefComerComprador);
    this.referenciasComercilaes.push(this.RefComerCodeudor);

    //agregamos las referencias comerciales del comprador y codeudor en un array
    this.referenciasPersonales.push(this.RefPersoComprador);
    this.referenciasPersonales.push(this.RefComerCodeudor);

    this.solicitudCredito.cliente = this.cliente;

    
    
  }

  public guardarAutorizaciones(datacrediot:any, datospersonales:any){
    this.documentos.dataCredito = datacrediot;
    this.documentos.datosPersonales =  datospersonales;
    console.log(this.documentos);
  }
}
