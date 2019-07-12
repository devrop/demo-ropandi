import { Injectable } from '@angular/core';
import Swal  from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class SwalUtil {

  constructor() { }

  static AlertSucces(){
    Swal.fire({
      position: 'center',
      type: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }
  static AlertError(){
    Swal.fire({
      type: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    })
  }
}
