import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private loginService:LoginService, private router:Router) { }

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
