import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar-analista',
  templateUrl: './sidebar-analista.component.html',
  styleUrls: ['./sidebar-analista.component.css']
})
export class SidebarAnalistaComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  public logout(){
    this.loginService.logout();
    window.location.reload();
  }

}
