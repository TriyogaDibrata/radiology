import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailSinarxPageRoutingModule } from './detail-sinarx-routing.module';

import { DetailSinarxPage } from './detail-sinarx.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailSinarxPageRoutingModule
  ],
  declarations: [DetailSinarxPage]
})
export class DetailSinarxPageModule {}
