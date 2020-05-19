import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KueisionerHasilPageRoutingModule } from './kueisioner-hasil-routing.module';

import { KueisionerHasilPage } from './kueisioner-hasil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KueisionerHasilPageRoutingModule
  ],
  declarations: [KueisionerHasilPage]
})
export class KueisionerHasilPageModule {}
