import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-detail-sinarx',
  templateUrl: './detail-sinarx.page.html',
  styleUrls: ['./detail-sinarx.page.scss'],
})
export class DetailSinarxPage implements OnInit {

  item_id        : any;
  detail         : any = {};
  Dosis          : any;

  constructor(private route         : ActivatedRoute,
              private dataService   : DataService) { }

  ngOnInit() {
    this.item_id = this.route.snapshot.paramMap.get('id');
    console.log(this.item_id);
  }

  ionViewWillEnter(){
    this.getDetail();
  }

  getDetail(){
    this.dataService.getDetailPemeriksaan(this.item_id)
    .subscribe(data => {
      console.log(data[0]);
      this.detail = data[0];
    })
  }

}
