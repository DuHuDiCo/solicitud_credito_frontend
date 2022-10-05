import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AnalistasService } from './analistas.service';

@Injectable({
  providedIn: 'root'
})
export class AnalistaEmisorService {

  solicitud = {
    "cliente": {},
    "codeudor": {},
    "documentos": {},
    "estado": '',
    "fecha": '',
    "ventas": []
  }

  solicitudAnalista: any = {
    "id": '',
    "cliente": {
      "observacion_cliente": '',
      "referencias_comerciales_cliente": {

      },
      "referencias_personales_cliente": {}

    },
    "codeudor": {
      "observacion_codeudor": '',
      "referencias_comerciales_codeudor": {

      },
      "referencias_personales_codeudor": {}
    },
    "analisis": {
      "usuario": '',
      "observaciones": ''
    },
    "estado": ''

  }

  solicitudId: any;

  constructor(private router: Router, private analistaService: AnalistasService) { }


  public setSolicitud(soli: any) {
    this.solicitud = soli;
    
  }

  public getSolicitud() {
    return this.solicitud;
  }


  public setSolicitudId(id: any) {
    this.solicitudId = id;
  }

  public getSolicitudId() {
    this.solicitudAnalista.id = this.solicitudId;
    return this.solicitudId;
  }

  public getClienteSolicitud() {
    return this.solicitud.cliente;
  }

  public getDocumentos() {
    return this.solicitud.documentos;
  }


  public getCodeudor() {
    return this.solicitud.codeudor;
  }

  public setObservacionCliente(obs: any) {
    this.solicitudAnalista.cliente.observacion_cliente = obs;
  }

  public setObservacionCodeudor(obs: any) {
    this.solicitudAnalista.codeudor.observacion_codeudor = obs;
  }


  public setReferencias(comer: any[], pers: any[]) {
    this.solicitudAnalista.cliente.referencias_comerciales_cliente = comer;
    this.solicitudAnalista.cliente.referencias_personales_cliente = pers;

    

  }


  public setReferenciasCodeudor(comer: any[], pers: any[]) {
    this.solicitudAnalista.codeudor.referencias_comerciales_codeudor = comer;
    this.solicitudAnalista.codeudor.referencias_personales_codeudor = pers;
    
  }


  public guardarSolicitudAnalista() {
    this.analistaService.guardarSolicitudAnalista(this.solicitudAnalista).subscribe(
      (data: any) => {
        
      }, (error: any) => {
        
      }
    );
  }

  public getObservacionesComprador() {
    return this.solicitudAnalista.cliente.observacion_cliente;
  }

  public guardarDatosAnalisis(id: any, obser: any) {
    this.solicitudAnalista.analisis.usuario = id;
    this.solicitudAnalista.estado = obser.estado;
    this.solicitudAnalista.analisis.observaciones = obser.observacion;
  }

  public getReferenciasComercialesCliente() {
    return this.solicitudAnalista.cliente.referencias_comerciales_cliente;
  }

  public getReferenciasComercialesCodeudor() {
    return this.solicitudAnalista.codeudor.referencias_comerciales_codeudor;
  }

  public getReferenciasPersonalesCliente() {
    return this.solicitudAnalista.cliente.referencias_personales_cliente;
  }

  public getReferenciasPersonalesCodeudor() {
    return this.solicitudAnalista.codeudor.referencias_personales_codeudor;
  }








}
