import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdfBuktiPage } from './pdf-bukti.page';

const routes: Routes = [
  {
    path: '',
    component: PdfBuktiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdfBuktiPageRoutingModule {}
