import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data/data.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-detail-risiko',
  templateUrl: './detail-risiko.page.html',
  styleUrls: ['./detail-risiko.page.scss'],
})
export class DetailRisikoPage implements OnInit {

  item_id        : any;
  detail         : any = {};
  loading        : any;

  constructor(private route         : ActivatedRoute,
              private dataService   : DataService,
              public loadingCtrl    : LoadingController) { }

  ngOnInit() {
    this.item_id = this.route.snapshot.paramMap.get('id');
  }

  ionViewWillEnter(){
    this.showLoading();
    this.getDetail();
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
    }, err => {
      this.loading.dismiss();
      console.log(err);
    })
  }

}
