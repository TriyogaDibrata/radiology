import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KueisionerSikapPageRoutingModule } from './kueisioner-sikap-routing.module';

import { KueisionerSikapPage } from './kueisioner-sikap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KueisionerSikapPageRoutingModule
  ],
  declarations: [KueisionerSikapPage]
})
export class KueisionerSikapPageModule {}
