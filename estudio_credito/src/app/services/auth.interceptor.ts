import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReques = request;
    const token = this.loginService.getToken();
    
    
    if(token != null){
      authReques = authReques.clone({
        setHeaders:{Authorization: `Bearer ${token}`}
      })
      
    }

    return next.handle(authReques);
  }
}

export const AuthInterceptorProviders = [
  {
    provide : HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
]