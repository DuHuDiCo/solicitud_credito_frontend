import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar-analista',
  templateUrl: './sidebar-analista.component.html',
  styleUrls: ['./sidebar-analista.component.css']
})
export class SidebarAnalistaComponent implements OnInit {

  constructor(private loginService:LoginService, private router:Router ){ }

  ngOnInit(): void {
  }

  public logout(){
    this.loginService.logout();
    Swal.fire({
      position:'top-end',
      icon:'success',
      title:'Sesion Cerrada Exitosamente',
      showConfirmButton: false,
      timer:2000
    })
    this.router.navigate(['']);
  }

}
