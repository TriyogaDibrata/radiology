import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinarxPageRoutingModule } from './sinarx-routing.module';

import { SinarxPage } from './sinarx.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinarxPageRoutingModule
  ],
  declarations: [SinarxPage]
})
export class SinarxPageModule {}
