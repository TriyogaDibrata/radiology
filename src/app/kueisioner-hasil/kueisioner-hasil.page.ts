import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data/data.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-kueisioner-hasil',
  templateUrl: './kueisioner-hasil.page.html',
  styleUrls: ['./kueisioner-hasil.page.scss'],
})
export class KueisionerHasilPage implements OnInit {

  id : any;
  result : any = {};
  quality : any = {};

  constructor(public route : ActivatedRoute,
              public dataService : DataService,
              public navCtrl : NavController
              ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ionViewDidEnter(){
    this.dataService.getResult(this.id).subscribe(arg => {
      console.log(arg);
      this.result = arg['data'];
      this.quality = arg['quality'];
    })
  }

  goTo(page){
    this.navCtrl.navigateRoot([page]);
  }

}
