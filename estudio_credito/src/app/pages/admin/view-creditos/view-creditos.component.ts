import { Component, OnInit } from '@angular/core';
import { CreditoService } from 'src/app/services/credito.service';
import baseUrl from 'src/app/services/helper';

@Component({
  selector: 'app-view-creditos',
  templateUrl: './view-creditos.component.html',
  styleUrls: ['./view-creditos.component.css']
})
export class ViewCreditosComponent implements OnInit {

  solicitudes: any = [];
  valores_totales: any = []
  links: any = []
  



  ventas = {
    cuotas: '',
    id: '',
    pago_inicial: '',
    producto: '',
    referencia: '',
    valor_producto: ''
  }

  cuotas: any = []



  constructor(private creditoService: CreditoService) { }

  ngOnInit(): void {
    this.obtenerTodasSolicitudes();

  }

  public obtenerTodasSolicitudes() {
    this.creditoService.obtenerSolicitudesCredito().subscribe(
      (data: any) => {
        this.solicitudes = data;
        console.log(this.solicitudes)
        this.obtenerValorTotal();

      }
    );
  }

  public obtenerValorTotal() {
    let valor = 0;
    let i = 0;
    
    this.solicitudes.forEach((soli: any) => {
      let link = this.generarLink(soli.id);
      this.links.push(link);

      if (soli.ventas.length > 1) {
        let v:any = []
        soli.ventas.forEach((vent:any) => {
          valor = valor + vent.valor_producto;
          
          v.push(vent.cuotas);
          
          
        });
        let max = Math.max.apply(null, v);
        this.cuotas.push(max);
        
      } else {
        soli.ventas.forEach((vent: any) => {
          valor = valor + vent.valor_producto;
          this.cuotas.push(vent.cuotas);
          
        });
        
      }

      this.valores_totales.push(valor);
      
      valor = 0;

      console.log(i);
    });



    console.log(this.valores_totales);
    console.log(this.cuotas);
    console.log(this.links);
    


  }

  public generarLink(id: any) {
    let link = "http://localhost:4200/solicitud-credito/" + id
    return link;
  }


}
