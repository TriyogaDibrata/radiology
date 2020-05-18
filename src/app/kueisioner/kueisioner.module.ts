import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KueisionerPageRoutingModule } from './kueisioner-routing.module';

import { KueisionerPage } from './kueisioner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KueisionerPageRoutingModule
  ],
  declarations: [KueisionerPage]
})
export class KueisionerPageModule {}
