import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,  } from '@angular/router';
import { SolicituCreditoClienteEmisorService } from 'src/app/services/solicitu-credito-cliente-emisor.service';
import { RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-solicitud-credito-cliente',
  templateUrl: './solicitud-credito-cliente.component.html',
  styleUrls: ['./solicitud-credito-cliente.component.css']
})
export class SolicitudCreditoClienteComponent implements OnInit {

  solicitudId = 0;
  

  constructor(private route:ActivatedRoute,private emisor:SolicituCreditoClienteEmisorService, private router:Router) { }

  ngOnInit(): void {
    this.solicitudId = this.route.snapshot.params['solicitudId'];
    this.emisor.tomarId(this.solicitudId);
    
  }

  

  

}
