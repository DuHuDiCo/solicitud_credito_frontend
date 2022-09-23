import { Component, OnInit, ViewChild, ElementRef, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { CreditoService } from 'src/app/services/credito.service';
import { SolicituCreditoClienteEmisorService } from 'src/app/services/solicitu-credito-cliente-emisor.service';
import { isPlatformBrowser } from '@angular/common';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-respaldo-cedula-codeudor',
  templateUrl: './respaldo-cedula-codeudor.component.html',
  styleUrls: ['./respaldo-cedula-codeudor.component.css']
})
export class RespaldoCedulaCodeudorComponent implements OnInit {
  @ViewChild('asVideo')
  asvideo!: ElementRef<HTMLVideoElement>;
  canva = true;
  //canvas
  @ViewChild('picture') foto!: ElementRef;

  @ViewChild('imageFinal')
  imgFinal!: ElementRef<HTMLImageElement>;
  @ViewChild('asImg')
  img!: ElementRef<HTMLImageElement>;

  solicitudId: any;
  valid = false;
  video: any;
  tomar = true;
  canvasButtoms = false;

  medidasCanva = {
    height: null,
    width: null
  }

  deActivate = false;

  respaldoCedula = {
    cedula: ''
  }

  quien:any = "codeudor";


  activeCamera = false;
  constructor(private emisor: SolicituCreditoClienteEmisorService, private solicitudCredito: CreditoService, private renderer2: Renderer2, @Inject(PLATFORM_ID) private _platform: Object) { }

  ngOnInit(): void {

  }

  public activarSubirFoto() {
    this.valid = true;
    this.tomar = false;

  }

  public activarCanva() {

    let can = this.foto.nativeElement;
    this.renderer2.setStyle(can, 'display', 'block');

  }

  public desActivarCanva() {

    let can = this.foto.nativeElement;
    this.renderer2.setStyle(can, 'display', 'none');

  }

  public obtenerPermisos() {
    if (isPlatformBrowser(this._platform) && 'mediaDevices' in navigator) {

      this.video = this.asvideo.nativeElement;
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(
          (stream) => {
            this.video.srcObject = stream;

            this.video.play();

          }
        ).catch((error) => {
          console.log(error);
        })
      this.activeCamera = true;
      this.deActivate = true;
    }

  }

  public tomarFoto() {

    const take = this.foto.nativeElement;

    let ctx = take.getContext('2d');
    ctx.drawImage(this.video, 0, 0, this.video.videoWidth, this.video.videoHeight);
    this.medidasCanva.height = this.video.videoHeight;
    this.medidasCanva.width = this.video.videoWidth;
    this.video.pause();
    (this.video.srcObject as MediaStream)
      .getVideoTracks()[0]
      .stop();
    this.video.srcObject = null;
    this.valid = false;
    this.canvasButtoms = true;
    this.activarCanva();
    console.log(this.medidasCanva);
  }

  public guardarImagen() {
    var canva = this.foto.nativeElement;
    this.respaldoCedula.cedula = canva.toDataURL();
    
    this.guardarFile(this.respaldoCedula.cedula, canva, this.quien);
    
  }

  public guardarFile(photo: any, canva:any, quien:any) {
    Swal.fire({
      title: '¿Quieres Guardar la Foto?',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      icon: 'info'
    }).then((result: any) => {
      if (result.isConfirmed) {
        var imagen = this.img.nativeElement;
        this.renderer2.setAttribute(imagen, 'src', photo);
        this.renderer2.setStyle(imagen, 'height', '150px');
        this.renderer2.setStyle(imagen, 'width', '200px');
        this.renderer2.setStyle(canva, 'display', 'none');
        this.canvasButtoms = false;
       
        this.solicitudCredito.guardarRespaldoCedula(photo, quien);
        
      }
    })

  }

  public againFoto() {

    this.valid = true;
    this.activeCamera = false;
    this.deActivate = false;
    this.canvasButtoms = false;

    const take = this.foto.nativeElement;
    let ctx = take.getContext("2d");
    ctx.clearRect(0, 0, take.width, take.height);
    this.desActivarCanva();

  }

  public cancelar() {
    const take = this.foto.nativeElement;
    let ctx = take.getContext("2d");
    ctx.clearRect(0, 0, take.width, take.height);
    this.desActivarCanva();
    this.tomar = true;
    this.canvasButtoms = false;
    this.deActivate = false;
  }

}
