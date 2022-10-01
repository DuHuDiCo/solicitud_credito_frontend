import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AnalistasService {

  constructor(private http:HttpClient) { }


  public obtenerSolicitudes(){
    return this.http.get(`${baseUrl}/analista/`);
  }

  public obtenerSolicitudById(id:any){
    return this.http.get(`${baseUrl}/analista/${id}`);
  }

  public guardarSolicitudAnalista(solicitudAnalista:any){
    return this.http.post(`${baseUrl}/solicitud-analista/`,solicitudAnalista);
  }
}
