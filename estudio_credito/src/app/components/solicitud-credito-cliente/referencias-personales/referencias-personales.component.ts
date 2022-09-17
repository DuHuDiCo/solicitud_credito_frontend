import { Component, OnInit } from '@angular/core';
import { SolicituCreditoClienteEmisorService } from 'src/app/services/solicitu-credito-cliente-emisor.service';

@Component({
  selector: 'app-referencias-personales',
  templateUrl: './referencias-personales.component.html',
  styleUrls: ['./referencias-personales.component.css']
})
export class ReferenciasPersonalesComponent implements OnInit {

  solicitudId:any;
  constructor(private emisor:SolicituCreditoClienteEmisorService) { }

  ngOnInit(): void {
    this.solicitudId = this.emisor.getId();
    this.emisor.tomarId(this.solicitudId);
  }

}
