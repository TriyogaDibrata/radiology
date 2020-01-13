import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-alat-radiologi',
  templateUrl: './alat-radiologi.page.html',
  styleUrls: ['./alat-radiologi.page.scss'],
})
export class AlatRadiologiPage implements OnInit {

  jsonData    : any = [];
  showList    : boolean = false;
  items       : any = [];

  constructor(public dataService     : DataService,
              public navCtrl         : NavController) {
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
  }

  goTo(item){
    this.navCtrl.navigateRoot(['detail-alat-radiologi/', item.id]);
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
