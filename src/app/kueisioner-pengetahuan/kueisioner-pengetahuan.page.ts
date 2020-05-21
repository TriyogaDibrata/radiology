import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kueisioner-pengetahuan',
  templateUrl: './kueisioner-pengetahuan.page.html',
  styleUrls: ['./kueisioner-pengetahuan.page.scss'],
})
export class KueisionerPengetahuanPage implements OnInit {

  kuis : any;
  options : any = [];
  disabled_button : boolean = true;
  kuis_value : any = [];
  user : any = {};
  show_st : boolean;

  constructor(public navCtrl: NavController,
              private dataService : DataService,
              public route : ActivatedRoute) { }

  ngOnInit() {
    this.user = JSON.parse(this.route.snapshot.paramMap.get('dataObj'));
  }

  ionViewWillEnter(){
    this.show_st = true;
  }

  ionViewDidEnter(){
    this.dataService.getKuisPengetahuan().subscribe(data => {
      this.show_st = false;
      this.kuis = data;
      this.kuis.forEach(element => {
        this.kuis_value.push(element.value);
      });
    }, err => {
      this.show_st = false;
    })
  }

  select(ev){
    console.log(this.options.length);
    if(this.options.length === this.kuis.length){
      this.disabled_button = false;
    } else {
      this.disabled_button = true;
    }
  }
  
  goTo(page){
    this.navCtrl.navigateForward(page);
  }

  result(){
    let res = 0;
    let score : number = 0;
    for( let i = 0; i < this.kuis.length; i++){
      if(this.kuis_value[i] == this.options[i]){
        res++;
      }
    }
    
    score = Math.round((res/this.kuis.length) * 100);

    let data = {
      'name'      : this.user.name,
      'age'       : this.user.age,
      'education' : this.user.education,
      'res_kuis_pengetahuan' : score
    }

    let dataObj = JSON.stringify(data);

    this.navCtrl.navigateForward(['kueisioner-sikap', dataObj]);
  }
}
