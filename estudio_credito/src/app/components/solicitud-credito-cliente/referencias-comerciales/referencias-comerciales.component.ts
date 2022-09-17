import { Component, OnInit } from '@angular/core';
import { SolicituCreditoClienteEmisorService } from 'src/app/services/solicitu-credito-cliente-emisor.service';

@Component({
  selector: 'app-referencias-comerciales',
  templateUrl: './referencias-comerciales.component.html',
  styleUrls: ['./referencias-comerciales.component.css']
})
export class ReferenciasComercialesComponent implements OnInit {

  solicitudId:any;

  constructor(private emisor:SolicituCreditoClienteEmisorService) { }

  ngOnInit(): void {
    this.solicitudId = this.emisor.getId();
    this.emisor.tomarId(this.solicitudId);
  }

}
