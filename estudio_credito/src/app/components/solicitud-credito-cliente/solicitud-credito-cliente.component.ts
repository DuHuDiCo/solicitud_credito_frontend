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

  @ViewChild('comercial')
  refCom!: ElementRef;

  @ViewChild('personal')
  refPer!: ElementRef;

  @ViewChild('docs')
  doc!: ElementRef;


  solicitudId = 0;

  validButons: any;

  constructor(private route: ActivatedRoute, private toast:NgToastService,private credito:CreditoService,private render2:Renderer2,private emisor: SolicituCreditoClienteEmisorService, private router: Router) { }

  ngOnInit(): void {
    this.solicitudId = this.route.snapshot.params['solicitudId'];
    this.emisor.tomarId(this.solicitudId);
    
  }


  public validarComprador(){
    var compra= this.credito.getCliente();
   

    if(compra.cedula == '' || compra.cedula == null){
     
      
      
      this.router.navigate(['/solicitud-credito/'+this.solicitudId+'/comprador']);

    }else{
      this.setStyleDeActive(this.btnCom);
      
    }
   
  }

  public validarCodeudor(){
    var codeud = this.credito.getCodeudor();
    if(codeud.cedula == '' || codeud.cedula == null){
      this.toast.error({
        detail: "Error",
        summary: "Llene los datos",
        position: "tr",
        duration: 3500
        
      })
    
      
    }else{
      
      this.router.navigate(['/solicitud-credito/'+this.solicitudId+'/codeudor']);
      
    }
  }

  public validarReferenciasC(){
    var referenciasC = this.credito.getReferenciasComerciales();
    if(Object.keys(referenciasC).length == 0){
      this.toast.error({
        detail: "Error",
        summary: "Llene los datos",
        position: "tr",
        duration: 3500
        
      })
       
        
    }else{
     
      this.router.navigate(['/solicitud-credito/'+this.solicitudId+'/referencias-comerciales']);
    }
  }

  public validarReferenciasP(){
    var referenciasP = this.credito.getReferenciasPersonales();
    if(Object.keys(referenciasP).length == 0){
      this.toast.error({
        detail: "Error",
        summary: "Llene los datos",
        position: "tr",
        duration: 3500
        
      })
        
        
    }else{
      
      this.router.navigate(['/solicitud-credito/'+this.solicitudId+'/referencias-personales']);
    }
  }

  public validarDocs(){
    
  
    var docs = this.credito.getDocs();
    
    if(docs.cedula_ciudadania_comprador == null){
      this.toast.error({
        detail: "Error",
        summary: "Llene los datos",
        position: "tr",
        duration: 3500
        
      })
      
      this.router.navigate(['/solicitud-credito/'+this.solicitudId+'/docs']);
    }else{
     
      
    }
  }

  public setStyleActive(bnt:any){
    const btn2 = bnt.nativeElement;
    this.render2.setStyle(btn2, 'background-color', '#960010');
    this.render2.setStyle(btn2, 'color', 'white');
  }

  public setStyleDeActive(btn:any){
    const btn2 = btn.nativeElement;
    this.render2.setStyle(btn2, 'background-color', 'white');
    this.render2.setStyle(btn2, 'color', 'black');
  }



  





}
