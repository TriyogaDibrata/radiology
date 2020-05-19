import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-kueisioner-sikap',
  templateUrl: './kueisioner-sikap.page.html',
  styleUrls: ['./kueisioner-sikap.page.scss'],
})
export class KueisionerSikapPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  goTo(page){
    this.navCtrl.navigateForward(page);
  }
}
