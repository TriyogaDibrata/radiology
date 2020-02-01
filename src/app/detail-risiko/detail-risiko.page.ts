import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data/data.service';
import { LoadingController, PopoverController } from '@ionic/angular';
import { AlertService } from '../services/alert/alert.service';
import { EnvService } from '../services/env/env.service';
import { PopoverComponent } from '../components/popover/popover/popover.component';
import { ImgPopoverComponent } from '../components/img-popover/img-popover/img-popover.component';

@Component({
  selector: 'app-detail-risiko',
  templateUrl: './detail-risiko.page.html',
  styleUrls: ['./detail-risiko.page.scss'],
})
export class DetailRisikoPage implements OnInit {

  item_id        : any;
  detail         : any = {};
  loading        : any;
  files          : any;
  apd_files      : any;
  enlarge_popover: any;

  constructor(private route         : ActivatedRoute,
              private dataService   : DataService,
              private envService    : EnvService,
              public alertService   : AlertService,
              public popoverCtrl    : PopoverController,
              public loadingCtrl    : LoadingController) { }

  ngOnInit() {
    this.item_id = this.route.snapshot.paramMap.get('id');
  }

  ionViewWillEnter(){
    this.showLoading();
    this.getDetail();
    this.getApd();
  }

  async showLoading(){
    this.loading = await this.loadingCtrl.create(this.dataService.loadingOption);

    await this.loading.present();
  }

  getDetail(){
    this.dataService.getDetailRisiko(this.item_id)
    .subscribe(data => {
      this.loading.dismiss();
      console.log(data[0]);
      this.detail = data[0];
      this.files = data[0].files;
      console.log(this.files);
    }, err => {
      this.loading.dismiss();
      console.log(err);
      this.alertService.presentAlert('Error', 'Cannot load requests');
    })
  }

  getApd(){
    this.dataService.getApd(this.item_id)
    .subscribe(data => {
      this.loading.dismiss();
      this.apd_files = data[0]['apd_files'];
      console.log(this.apd_files);
    }, err => {
      this.loading.dismiss();
      console.log(err);
      this.alertService.presentAlert('Error', 'Cannot load requests');
    })
  }

  async enlarge(files, id){
    console.log(files, id);

    this.enlarge_popover = await this.popoverCtrl.create({
      component : ImgPopoverComponent,
      translucent : true,
      cssClass : 'img-popover',
      componentProps : {
        id      : id,
        files   : files
      }
    });

    return await this.enlarge_popover.present();
  }

}
