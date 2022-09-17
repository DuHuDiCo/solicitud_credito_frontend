import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new Subject<boolean>();

  constructor(private http:HttpClient) { }


  //generamos el token
  public generateToken(loginData:any){
    return this.http.post(`${baseUrl}/auth/signin`, loginData);

  }

  //iniciamos sesion y establecemos el token en el localStorage
  public loginUser(token:any){
    localStorage.setItem('Token', token);
  }

  //validamos si es que esta logeado
  public isLoggedIn(){
    let tokenStr = localStorage.getItem('Token');
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null){
      return false;
    }else{
      return true;
    }

  }

  //cerramos session y eliminamos el token del localStorage
  public logout(){
    localStorage.removeItem('Token');
    localStorage.removeItem('User');
    return true;
  }


  //obtenemos el token
  public getToken(){
    return localStorage.getItem('Token');
  }

  //guardamos el usuario actual en el localStorage
  public setUser(user:any){
    localStorage.setItem('User',JSON.stringify(user));
  }

  //obtenemos el usuario del localStorage
  public getUser(){
    let userStr =  localStorage.getItem('User');
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }

  }

  user ={
    accesToken:'',
    email:'',
    id:'',
    roles:[],
    tokenType:'',
    username:''
  }
  //obtenemos los roles del usuario
  public getUserRoles(){
    
    // let user1 = this.getUser();
    // return user.authorities[0].authority;
    this. user = this.getUser();
    return this.user.roles[0];
  }

  public getCurrentUser(){
    return this.http.get(`${baseUrl}/auth/current`);
  }

}
