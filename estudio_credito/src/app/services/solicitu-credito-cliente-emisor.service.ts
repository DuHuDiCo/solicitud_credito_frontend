import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicituCreditoClienteEmisorService {
 
  solicitudId:any;

  validButtoms:any;

  constructor() { }

  public tomarId(id:any){
    this.solicitudId = id;
  }

  public getId(){
    return this.solicitudId;
  }

  public getvalidButtoms(){
    return this.validButtoms;
  }

  public setvalidButtoms(dato:any){
    this.validButtoms = dato;
  }
}
