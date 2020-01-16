import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data/data.service';
import { AppVersion } from '@ionic-native/app-version/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  version : any;

  constructor(public navCtrl          : NavController,
              public dataService      : DataService,
              private appVersion      : AppVersion) {}

  ionViewWillEnter(){
    this.appVersion.getVersionNumber().then(value => {
      this.version = value;
    }).catch(err => {
      console.log(err);
    });
  }

  goTo(page){
    this.navCtrl.navigateForward(page);
  }

}
