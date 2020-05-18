import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KueisionerPengetahuanPageRoutingModule } from './kueisioner-pengetahuan-routing.module';

import { KueisionerPengetahuanPage } from './kueisioner-pengetahuan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KueisionerPengetahuanPageRoutingModule
  ],
  declarations: [KueisionerPengetahuanPage]
})
export class KueisionerPengetahuanPageModule {}
