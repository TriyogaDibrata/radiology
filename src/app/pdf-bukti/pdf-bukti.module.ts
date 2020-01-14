import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PdfBuktiPageRoutingModule } from './pdf-bukti-routing.module';

import { PdfBuktiPage } from './pdf-bukti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfBuktiPageRoutingModule
  ],
  declarations: [PdfBuktiPage]
})
export class PdfBuktiPageModule {}
