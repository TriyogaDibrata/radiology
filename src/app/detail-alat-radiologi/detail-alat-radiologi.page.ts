import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data/data.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-detail-alat-radiologi',
  templateUrl: './detail-alat-radiologi.page.html',
  styleUrls: ['./detail-alat-radiologi.page.scss'],
})
export class DetailAlatRadiologiPage implements OnInit {

  item_id        : any;
  detail         : any = {};
  Dosis          : any;
  loading        : any;

  constructor(private route         : ActivatedRoute,
              private dataService   : DataService,
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
    }, err => {
      console.log(err);
      this.loading.dismiss();
    })
  }

}
