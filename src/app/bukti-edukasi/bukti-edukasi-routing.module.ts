import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuktiEdukasiPage } from './bukti-edukasi.page';

const routes: Routes = [
  {
    path: '',
    component: BuktiEdukasiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuktiEdukasiPageRoutingModule {}
