import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RisikoRadiasiPageRoutingModule } from './risiko-radiasi-routing.module';

import { RisikoRadiasiPage } from './risiko-radiasi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RisikoRadiasiPageRoutingModule
  ],
  declarations: [RisikoRadiasiPage]
})
export class RisikoRadiasiPageModule {}
