import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnalistaEmisorService } from 'src/app/services/analista-emisor.service';
import { AnalistasService } from 'src/app/services/analistas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-creditos-analista',
  templateUrl: './ver-creditos-analista.component.html',
  styleUrls: ['./ver-creditos-analista.component.css']
})
export class VerCreditosAnalistaComponent implements OnInit {

  solicitudes:any = []

  solicitud = {}
  constructor(private analistaService:AnalistasService, private emisor:AnalistaEmisorService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerSolicitudes();
  }

  public obtenerSolicitudes(){
    this.analistaService.obtenerSolicitudes().subscribe(
      (data:any)=>{
        
        this.solicitudes = data;
        
      },(error:any)=>{
        
      }
    )
  }

  public obtenerSolicitudById(id:any){
    this.emisor.setSolicitudId(id);
    Swal.fire({
      title: '¿Quieres Estudiar el Credito?',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor:'#960010',
      icon: 'info'
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.analistaService.obtenerSolicitudById(id).subscribe(
          (data:any)=>{
            this.solicitud = data;
            this.emisor.setSolicitud(this.solicitud);
            this.router.navigate(['analista/solicitud/'+id+'/estudio-comprador']);
            
          },(error:any)=>{
            
          }
        );
      }
    })


    
  }

}
