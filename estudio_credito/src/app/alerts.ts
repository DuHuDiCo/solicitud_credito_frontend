import Swal from "sweetalert2";

export class Alerts{

    public alertaTR(position:any, icoon:any, title:any, showButoon:any, time:any){
        Swal.fire({
            position:position,
            icon:icoon,
            title:title,
            showConfirmButton:showButoon,
            timer:time
        })

    }
}