import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { DataService } from '../services/data/data.service';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from '../services/alert/alert.service';

@Component({
  selector: 'app-kueisioner-sikap',
  templateUrl: './kueisioner-sikap.page.html',
  styleUrls: ['./kueisioner-sikap.page.scss'],
})
export class KueisionerSikapPage implements OnInit {

  kuis : any;
  options : any = [];
  disabled_button : boolean = true;
  dataRec : any = {};
  show_st : boolean;
  loading : any;

  constructor(public navCtrl: NavController,
              public route: ActivatedRoute,
              public loadingCtrl: LoadingController,
              public alert: AlertService,
              private dataService : DataService) { }

  ngOnInit() {
    this.dataRec = JSON.parse(this.route.snapshot.paramMap.get('dataObj'));
  }
  

  ionViewWillEnter(){
    this.show_st = true;
  }

  ionViewDidEnter(){
    this.dataService.getKuisSikap().subscribe(data => {
      this.show_st = false;
      this.kuis = data;
    }, err => {
      this.show_st = false;
    })
  }

  async showLoading(){
    this.loading = await this.loadingCtrl.create(this.dataService.loadingOption);

    await this.loading.present();
  }


  select(ev){
    console.log(this.options.length);
    if(this.options.length === this.kuis.length){
      this.disabled_button = false;
    } else {
      this.disabled_button = true;
    }
  }

  getResult(){
    let sum = 0;
    for (let opt of this.options){
      sum += Number(opt);
    }

    let data = {
      'name'        : this.dataRec.name,
      'age'         : this.dataRec.age,
      'education'   : this.dataRec.education,
      'res_pengetahuan' : this.dataRec.res_kuis_pengetahuan,
      'res_sikap' : sum
    }
    this.showLoading();
    this.dataService.saveResult(data).subscribe(arg => {
      this.loading.dismiss();
      if(arg['success']){
        this.navCtrl.navigateRoot(['kueisioner-hasil', arg['data']['id']]);
      } else {
        this.alert.presentAlert('Ooopppsss', 'Cannot proceed request');
      }
    }, err => {
      this.loading.dismiss();
      this.alert.presentAlert('Ooopppsss', 'Cannot proceed request');
    })
  }


  goTo(page){
    this.navCtrl.navigateForward(page);
  }
}
