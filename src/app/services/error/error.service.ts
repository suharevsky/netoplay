import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(public toastController: ToastController) { }

  async presentToast(message: string):Promise<any> {
    const toast = await this.toastController.create({
      message,
      duration: 1500,
      position: 'top'
    });

    await toast.present();
  }

  show(message: string):void {
    this.presentToast(message);
  }
}
