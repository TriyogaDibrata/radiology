import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl          : NavController,
              public dataService     : DataService) {}

  ionViewWillEnter(){
  }

  goTo(page){
    this.navCtrl.navigateRoot(page);
  }

}
