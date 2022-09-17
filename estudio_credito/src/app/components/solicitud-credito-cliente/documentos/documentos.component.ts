import { Component, OnInit } from '@angular/core';
import { SolicituCreditoClienteEmisorService } from 'src/app/services/solicitu-credito-cliente-emisor.service';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css'],
  
})
export class DocumentosComponent implements OnInit {
    
  solicitudId:any;
  constructor(private emisor:SolicituCreditoClienteEmisorService) { }

  ngOnInit(): void {
  }

  public activarSubirFoto(){
    this.solicitudId = this.emisor.getId();
    this.emisor.tomarId(this.solicitudId);
  }

}
