import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-sinarx',
  templateUrl: './sinarx.page.html',
  styleUrls: ['./sinarx.page.scss'],
})
export class SinarxPage implements OnInit {

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
    this.navCtrl.navigateForward(['detail-sinarx/', item.id]);
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
