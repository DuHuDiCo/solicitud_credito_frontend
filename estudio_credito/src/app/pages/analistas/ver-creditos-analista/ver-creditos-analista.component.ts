import { Component, OnInit } from '@angular/core';
import { AnalistasService } from 'src/app/services/analistas.service';

@Component({
  selector: 'app-ver-creditos-analista',
  templateUrl: './ver-creditos-analista.component.html',
  styleUrls: ['./ver-creditos-analista.component.css']
})
export class VerCreditosAnalistaComponent implements OnInit {

  solicitudes:any = []

  constructor(private analistaService:AnalistasService) { }

  ngOnInit(): void {
    this.obtenerSolicitudes();
  }

  public obtenerSolicitudes(){
    this.analistaService.obtenerSolicitudes().subscribe(
      (data:any)=>{
        
        this.solicitudes = data;
        console.log(this.solicitudes);
      },(error:any)=>{
        console.log(error);
      }
    )
  }

}
