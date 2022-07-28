import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  public alertSuccess(message: string): void {
    this.showAlert(message, 'success');
  }

  public alertInfo(message: string): void {
    this.showAlert(message, 'info');
  }

  public alertError(message: string): void {
    this.showAlert(message, 'error');
  }

  private showAlert(message: string, icon: SweetAlertIcon): void {
    Swal.fire({
      text: message,
      icon,
      timer: 2500,
      showConfirmButton: false
    })
  }
}
