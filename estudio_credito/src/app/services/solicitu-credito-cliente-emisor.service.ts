import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicituCreditoClienteEmisorService {
 
  solicitudId:any;

  constructor() { }

  public tomarId(id:any){
    this.solicitudId = id;
  }

  public getId(){
    return this.solicitudId;
  }
}
