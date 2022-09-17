import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CreditoService {

  constructor(private http: HttpClient) { }


  public crearSolicituCredito(venta:any[]){
    console.log(venta);
    return this.http.post(`${baseUrl}/solicitud/`, venta);
  }

  public obtenerSolicitudesCredito(){
    return this.http.get(`${baseUrl}/solicitud/all`);
  }
}
