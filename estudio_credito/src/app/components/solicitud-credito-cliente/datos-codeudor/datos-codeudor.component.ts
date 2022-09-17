import { Component, OnInit } from '@angular/core';
import { SolicituCreditoClienteEmisorService } from 'src/app/services/solicitu-credito-cliente-emisor.service';

@Component({
  selector: 'app-datos-codeudor',
  templateUrl: './datos-codeudor.component.html',
  styleUrls: ['./datos-codeudor.component.css']
})
export class DatosCodeudorComponent implements OnInit {

  solicitudId:any;


  constructor(private emison:SolicituCreditoClienteEmisorService) { }

  ngOnInit(): void {
    this.solicitudId = this.emison.getId();
    this.emison.tomarId(this.solicitudId);
  }

}
