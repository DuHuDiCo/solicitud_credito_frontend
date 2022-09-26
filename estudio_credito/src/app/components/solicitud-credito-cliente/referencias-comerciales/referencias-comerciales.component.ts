import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CreditoService } from 'src/app/services/credito.service';
import { SolicituCreditoClienteEmisorService } from 'src/app/services/solicitu-credito-cliente-emisor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-referencias-comerciales',
  templateUrl: './referencias-comerciales.component.html',
  styleUrls: ['./referencias-comerciales.component.css']
})
export class ReferenciasComercialesComponent implements OnInit {
  @ViewChild('asTbl') tbl!: ElementRef;
  @ViewChild('asTbl2') tbl2!: ElementRef;
  solicitudId: any;


  referenciasComerciales: any = []

  referenciasComercialesCliente: any = []
  referenciasComercialesCodeudor: any = []

  idComprador: any = 1;
  idCodeudor: any = 1;

  referenciaComprador = {
    "id": '',
    "nombre": '',
    "telefono": ''
  }

  referenciaCodeudor = {
    "id": '',
    "nombre": '',
    "telefono": ''
  }

  referencias_comerciales_comprador={
    "nombre": '',
    "telefono": ''
  }
  referencias_comerciales_codeudor={
    "nombre": '',
    "telefono": ''
  }

  referenciasComprador: any = []
  referenciasCodeudor: any = []


  constructor(private emisor: SolicituCreditoClienteEmisorService, private credito:CreditoService,private router: Router, private renderer2: Renderer2, private toast: NgToastService) { }

  ngOnInit(): void {
    this.solicitudId = this.emisor.getId();
    this.emisor.tomarId(this.solicitudId);
  }

  public agregarReferenciaComer() {
    if (this.referenciaComprador.nombre == null || this.referenciaComprador.nombre == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
    } else if (this.referenciaComprador.telefono == null || this.referenciaComprador.telefono == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
    } else {
      this.referencias_comerciales_comprador.nombre = this.referenciaComprador.nombre;
      this.referencias_comerciales_comprador.telefono = this.referenciaComprador.telefono;
      this.referenciaComprador.id = this.idComprador;
      this.referenciasComprador.push(this.referencias_comerciales_comprador);
      this.referenciasCodeudor.push(this.referencias_comerciales_codeudor);
      const tbla = this.tbl.nativeElement;
      this.renderer2.setStyle(tbla, 'display', 'block');
      this.referenciasComerciales.push(this.referenciaComprador);
      this.referenciasComercialesCliente.push(this.referenciaComprador);

      this.idComprador = this.idComprador + 1;
      this.referenciaComprador = {
        "id": '',
        "nombre": '',
        "telefono": ''
      }
    }

  }

  public agregarReferenciaComerCodeu() {
    if (this.referenciaCodeudor.nombre == null || this.referenciaCodeudor.nombre == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
    } else if (this.referenciaCodeudor.telefono == null || this.referenciaCodeudor.telefono == '') {
      this.toast.error({
        detail: "Error",
        summary: "el campo esta vacio",
        position: "tr",
        duration: 3500
      })
    } else {
      this.referencias_comerciales_codeudor.nombre = this.referenciaCodeudor.nombre
      this.referencias_comerciales_codeudor.telefono = this.referenciaCodeudor.telefono
      this.referenciaCodeudor.id = this.idCodeudor;
      const tbla = this.tbl2.nativeElement;
      this.renderer2.setStyle(tbla, 'display', 'block');
      this.referenciasComerciales.push(this.referenciaCodeudor);
      this.referenciasComercialesCodeudor.push(this.referenciaCodeudor);
      this.referenciasCodeudor.push(this.referencias_comerciales_codeudor);
      this.idCodeudor = this.idCodeudor + 1;
      this.referenciaCodeudor = {
        "id": '',
        "nombre": '',
        "telefono": ''
      }
    }
  }

  public eliminarItemCliente(id: any) {

    delete (this.referenciasComercialesCliente[id - 1])
    this.referenciasComercialesCliente = this.referenciasComercialesCliente.filter((v: any) => v.id != id);
  }

  public eliminarItemCodeudor(id: any) {

    delete (this.referenciasComercialesCodeudor[id - 1])
    this.referenciasComercialesCodeudor = this.referenciasComercialesCodeudor.filter((v: any) => v.id != id);
  }


  public print() {
    console.log(Object.keys(this.referenciasComercialesCliente).length)
    console.log(Object.keys(this.referenciasComercialesCodeudor).length)
  }

  public guardarYContinuar() {
    
    if (Object.keys(this.referenciasComercialesCliente).length == 0 || Object.keys(this.referenciasComercialesCodeudor).length == 0) {
      this.toast.error({
        detail: "Error",
        summary: "no has agregado referencias comerciales para el comprador",
        position: "tr",
        duration: 3500
      })
      if ( Object.keys(this.referenciasComercialesCodeudor).length == 0) {
        this.toast.error({
          detail: "Error",
          summary: "no has agregado referencias comerciales para codeudor",
          position: "tr",
          duration: 3500
        })
      }
    } else {
      this.credito.guardarReferenciasComerciales(this.referenciasComercialesCliente, this.referenciasComercialesCodeudor);
      Swal.fire({
        position:'top-end',
        icon:'success',
        title:'Datos Guardados Exitosamente',
        showConfirmButton: false,
        timer:2000
      })
      this.router.navigate(['/solicitud-credito/' + this.solicitudId + '/referencias-personales']);
    }
  }

  public goBack() {
    this.print();
    if (Object.keys(this.referenciasComercialesCliente).length == 0 && Object.keys(this.referenciasComercialesCodeudor).length == 0) {
      this.router.navigate(['/solicitud-credito/' + this.solicitudId + '/codeudor']);
    }else{
      Swal.fire({
        title:'Advertencia',
        text:'Tienes Cambios sin Guardar, ¿deseas Guardarlos?',
        icon:'warning',
        showCancelButton:true,
        confirmButtonColor:'#3085d6',
        cancelButtonColor:'#d33',
        confirmButtonText: 'Guardar',
        cancelButtonText: 'Cancelar'
      }).then((result:any)=>{
        if(result.isConfirmed){
          this.credito.guardarReferenciasComerciales(this.referenciasComprador, this.referenciasCodeudor);
          Swal.fire({
            position:'top-end',
            icon:'success',
            title:'Datos Guardados Exitosamente',
            showConfirmButton: false,
            timer:2000
          })
          this.router.navigate(['/solicitud-credito/' + this.solicitudId + '/codeudor']);
        }
      })
    }
  }
}
