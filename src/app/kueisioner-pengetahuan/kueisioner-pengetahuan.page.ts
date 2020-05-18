import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-kueisioner-pengetahuan',
  templateUrl: './kueisioner-pengetahuan.page.html',
  styleUrls: ['./kueisioner-pengetahuan.page.scss'],
})
export class KueisionerPengetahuanPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  goTo(page){
    this.navCtrl.navigateForward(page);
  }
}
