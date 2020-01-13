import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuktiEdukasiPageRoutingModule } from './bukti-edukasi-routing.module';

import { BuktiEdukasiPage } from './bukti-edukasi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuktiEdukasiPageRoutingModule
  ],
  declarations: [BuktiEdukasiPage]
})
export class BuktiEdukasiPageModule {}
