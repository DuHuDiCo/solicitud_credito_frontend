import { NgToastService } from 'ng-angular-popup';

export class Toast {

    constructor(private toast: NgToastService) { }

    public mensaje(tipo: any, titulo: any, mensaje: any, duracion: any, posicion: any) {
        switch (tipo) {
            case "success":
                this.toast.success({
                    detail: titulo,
                    summary: mensaje,
                    duration: duracion,
                    position: posicion
                })
                break;
            case "error":
                this.toast.error({
                    detail: titulo,
                    summary: mensaje,
                    duration: duracion,
                    position: posicion
                })
                break;
            case "info":
                this.toast.info({
                    detail: titulo,
                    summary: mensaje,
                    duration: duracion,
                    position: posicion
                })
                break;

            default:
                this.toast.warning({
                    detail: titulo,
                    summary: mensaje,
                    duration: duracion,
                    position: posicion
                })
                break;
        }

    }

}