import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { DataService } from '../services/data/data.service';
import { AlertService } from '../services/alert/alert.service';

@Component({
  selector: 'app-alat-radiologi',
  templateUrl: './alat-radiologi.page.html',
  styleUrls: ['./alat-radiologi.page.scss'],
})
export class AlatRadiologiPage implements OnInit {

  jsonData    : any = [];
  showList    : boolean = false;
  items       : any = [];
  loading     : any;

  constructor(public dataService     : DataService,
              public navCtrl         : NavController,
              public alertService    : AlertService,
              public loadingCtrl     : LoadingController) {
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.showLoading();
    this.getList();
  }

  async showLoading(){
    this.loading = await this.loadingCtrl.create(this.dataService.loadingOption);

    await this.loading.present();
  }

  getList(){
    this.dataService.getListData()
      .subscribe(data => {
        this.loading.dismiss();
        console.log(data);
      }, err=> {
        this.loading.dismiss();
        this.alertService.presentAlert('Error', 'Cannot load requests');
      });
  }

  goTo(item){
    this.navCtrl.navigateForward(['detail-alat-radiologi/', item.id]);
  }


  filterData(ev : any){
    const val = ev.target.value;

    if(val && val.trim() != ''){
      this.dataService.getListData()
      .subscribe(data => {
        this.showList = true;
        this.items = data;
        this.items = this.items.filter((item) => {
          return item.jenis_pemeriksaan.toLowerCase().indexOf(val.toLowerCase()) > -1;
        });
      });
    } else {
      this.showList = false;
    }
  }

}
