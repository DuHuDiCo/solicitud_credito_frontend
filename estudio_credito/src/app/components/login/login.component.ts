
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';







@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = {
    "username": '',
    "password": ''
  }

  user = {
    id:"",
    username:"",
    email:"",
    roles:[],
    accessToken:"",
    tokenType:""
  }

  
  

  constructor(private router: Router, private toast: NgToastService, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  public login() {
    if (this.usuario.username.trim() == '' || this.usuario.username.trim() == null) {
      this.toast.error({
        detail: "Error",
        summary: "El nombre de usuario esta vacio",
        position: "br",
        duration: 3500
      })
    }

    if (this.usuario.password.trim() == '' || this.usuario.password.trim() == null) {
      this.toast.error({
        detail: "Error",
        summary: "La Contraseña esta vacia",
        position: "br",
        duration: 3500
      })
    }


    this.loginService.generateToken(this.usuario).subscribe(
      (data: any) => {
        console.log(data);
        this.loginService.loginUser(data.accessToken);


        this.loginService.setUser(data);
       
        this.user = this.loginService.getUser();
        if (this.user.roles[0] == "ROL_ADMIN") {
          this.router.navigate(['admin']);
          this.loginService.loginStatusSubject.next(true);
          Swal.fire({
            position:'top-end',
            icon:'success',
            title:'Inicio Sesion Exitoso',
            showConfirmButton: false,
            timer:2000
          })
        } else if (this.user.roles[0] === "ROL_MODERADOR") {
          this.router.navigate(['mod']);
          this.loginService.loginStatusSubject.next(true);

        } else if (this.user.roles[0] === "ROL_USER") {
          this.router.navigate(['user']);
          this.loginService.loginStatusSubject.next(true);
          
        }else if (this.user.roles[0] === "ROL_ANALISTA") {
          this.router.navigate(['analista']);
          this.loginService.loginStatusSubject.next(true); 
        }else {
          this.loginService.logout();
        }


      }, (error: any) => {
        console.log(error);
        this.toast.error({
          detail: "Error",
          summary: "Datos Incorrectos, Vuelva a Intentar",
          position: "tr",
          duration: 3000
        })
      })

  }

}
