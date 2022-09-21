import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { SolicituCreditoClienteEmisorService } from 'src/app/services/solicitu-credito-cliente-emisor.service';
import { RouterLinkActive } from '@angular/router';
import { CreditoService } from 'src/app/services/credito.service';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-solicitud-credito-cliente',
  templateUrl: './solicitud-credito-cliente.component.html',
  styleUrls: ['./solicitud-credito-cliente.component.css']
})
export class SolicitudCreditoClienteComponent implements OnInit {
  @ViewChild('comprador')
  btnCom!: ElementRef;

  @ViewChild('codeudor')
  btnCod!: ElementRef;

  solicitudId = 0;

  validButons: any;

  constructor(private route: ActivatedRoute, private toast:NgToastService,private credito:CreditoService,private render2:Renderer2,private emisor: SolicituCreditoClienteEmisorService, private router: Router) { }

  ngOnInit(): void {
    this.solicitudId = this.route.snapshot.params['solicitudId'];
    this.emisor.tomarId(this.solicitudId);
    
  }


  public validarCodeudor(){
    var compra= this.credito.getCliente();
   
    `var codeud = this.credito.getCodeudor();
    var referenciasC = this.credito.getReferenciasComerciales();
    var referenciasP = this.credito.getReferenciasPersonales();
    var docs = this.credito.getDocs();`

    if(Object.keys(compra).length == 0){
      const btn1 = this.btnCod.nativeElement;
      
      const btn2 = this.btnCom.nativeElement;
      this.render2.setStyle(btn2, 'background-color', '#960010');
      this.render2.setStyle(btn2, 'color', 'white');
      this.router.navigate(['/solicitud-credito/'+this.solicitudId+'/comprador']);

    }else{
      const btn2 = this.btnCom.nativeElement;
      this.render2.setStyle(btn2, 'background-color', 'white');
      this.render2.setStyle(btn2, 'color', 'black');
    }
   
  }

  





}
