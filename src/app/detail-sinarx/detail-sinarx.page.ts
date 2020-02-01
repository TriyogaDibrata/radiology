import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data/data.service';
import { LoadingController, PopoverController } from '@ionic/angular';
import { AlertService } from '../services/alert/alert.service';
import { EnvService } from '../services/env/env.service';
import { ImgPopoverComponent } from '../components/img-popover/img-popover/img-popover.component';

@Component({
  selector: 'app-detail-sinarx',
  templateUrl: './detail-sinarx.page.html',
  styleUrls: ['./detail-sinarx.page.scss'],
})
export class DetailSinarxPage implements OnInit {

  item_id        : any;
  detail         : any = {};
  files          : any;
  Dosis          : any;
  loading         : any;
  enlarge_popover : any;

  constructor(private route         : ActivatedRoute,
              private dataService   : DataService,
              public popoverCtrl    : PopoverController,
              public alertService   : AlertService,
              private envService    : EnvService,
              public loadingCtrl    : LoadingController) { }

  ngOnInit() {
    this.item_id = this.route.snapshot.paramMap.get('id');
    console.log(this.item_id);
  }

  ionViewWillEnter(){
    this.getDetail();
    this.showLoading();
  }

  async showLoading(){
    this.loading = await this.loadingCtrl.create(this.dataService.loadingOption);

    await this.loading.present();
  }

  getDetail(){
    this.dataService.getDetailPemeriksaan(this.item_id)
    .subscribe(data => {
      this.loading.dismiss();
      console.log(data[0]);
      this.detail = data[0];
        this.files = data[0]['files'];
        console.log(this.files);
    }, err => {
      console.log(err);
      this.loading.dismiss();
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
