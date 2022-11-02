import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor(private http:HttpClient) { }

  url:String = "https://api-sms.masivapp.com";

  public crearMensaje(mensaje:any){
    return this.http.post(`${this.url}/send-message`, mensaje);
  }
}
