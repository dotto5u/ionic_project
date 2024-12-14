import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(private toastController: ToastController, private router: Router) {}

  async presentToast(type: string, message: string, route?: string) {
    const color = ['success', 'warning', 'danger'].includes(type) ? type : 'medium';

    if (route) {
      await this.router.navigate([route]);
    }

    this.showToast(message, color);
  }

  private async showToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: color
    });

    toast.present();
  }
}
