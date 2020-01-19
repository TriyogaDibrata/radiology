import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public alertCtrl        : AlertController) { }

  async presentAlert(header, msg){
    const alert = await this.alertCtrl.create({
      header    : header,
      message   : msg,
      buttons   : ['Okay']
    });

    await alert.present();
  }
}
