import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bukti-edukasi',
  templateUrl: './bukti-edukasi.page.html',
  styleUrls: ['./bukti-edukasi.page.scss'],
})
export class BuktiEdukasiPage implements OnInit {

  disabled_button       : boolean = true;

  constructor() { }

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

}
