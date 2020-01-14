import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bukti-edukasi',
  templateUrl: './bukti-edukasi.page.html',
  styleUrls: ['./bukti-edukasi.page.scss'],
})
export class BuktiEdukasiPage implements OnInit {

  disabled_button       : boolean = true;
  nama_pasien           : any;

  constructor(public navCtrl          : NavController) { }

  ngOnInit() {
  }

  onInput(ev : any){
    console.log(ev.target.value);

    const val = ev.target.value;
    if(val && val.trim != ''){
      this.disabled_button = false;
    } else {
      this.disabled_button = true;
    }
  }

  goTo(){
    console.log(this.nama_pasien);
    this.navCtrl.navigateRoot(['pdf-bukti/', this.nama_pasien]);
  }

}
