import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SolicitudClienteMovilService {


  constructor(private http:HttpClient) { }


  public enviarSolicitud(solicitud:any){
    return this.http.post(`${baseUrl}/solicitud-cliente/`, solicitud)
  }

 
}
