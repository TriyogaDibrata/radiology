import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-kueisioner',
  templateUrl: './kueisioner.page.html',
  styleUrls: ['./kueisioner.page.scss'],
})
export class KueisionerPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  goTo(page){
    this.navCtrl.navigateForward(page);
  }
}
