import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalistaEmisorService {

  solicitud={
    "cliente":{},
    "codeudor":{},
    "documentos":{},
    "estado":'',
    "fecha":'',
    "ventas":[]
  }

  solicitudId:any;

  constructor() { }


  public setSolicitud(soli:any){
    this.solicitud = soli;
  }

  public getSolicitud(){
    return this.solicitud;
  }


  public setSolicitudId(id:any){
    this.solicitudId = id;
  }

  public getSolicitudId(){
    return this.solicitudId;
  }

  public getClienteSolicitud(){
    return this.solicitud.cliente;
  }
  
}
