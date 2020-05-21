import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-kueisioner',
  templateUrl: './kueisioner.page.html',
  styleUrls: ['./kueisioner.page.scss'],
})
export class KueisionerPage implements OnInit {

  disabled_button : boolean = true;
  user : any = {};

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  goTo(page){
    this.navCtrl.navigateForward(page);
  }

  onChange(ev){
    if(this.user.name && this.user.age && this.user.education){
      this.disabled_button = false;
    } else{
      this.disabled_button = true;
    }
  }

  next(){
    let user_data = JSON.stringify(this.user);
    this.navCtrl.navigateForward(['kueisioner-pengetahuan', user_data]);
  }
}
