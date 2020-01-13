import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailAlatRadiologiPageRoutingModule } from './detail-alat-radiologi-routing.module';

import { DetailAlatRadiologiPage } from './detail-alat-radiologi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailAlatRadiologiPageRoutingModule
  ],
  declarations: [DetailAlatRadiologiPage]
})
export class DetailAlatRadiologiPageModule {}
