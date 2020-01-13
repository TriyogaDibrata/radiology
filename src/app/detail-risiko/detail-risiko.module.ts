import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailRisikoPageRoutingModule } from './detail-risiko-routing.module';

import { DetailRisikoPage } from './detail-risiko.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailRisikoPageRoutingModule
  ],
  declarations: [DetailRisikoPage]
})
export class DetailRisikoPageModule {}
