import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SolicituCreditoClienteEmisorService } from 'src/app/services/solicitu-credito-cliente-emisor.service';

@Component({
  selector: 'app-datos-comprador',
  templateUrl: './datos-comprador.component.html',
  styleUrls: ['./datos-comprador.component.css']
})
export class DatosCompradorComponent implements OnInit {

  solicitudId: any;
  

  constructor(private route: ActivatedRoute, private emisor: SolicituCreditoClienteEmisorService, private router: Router) { }

  ngOnInit(): void {
    this.solicitudId = this.emisor.getId()
    this.emisor.tomarId(this.solicitudId);
    
    
  }

 
}
