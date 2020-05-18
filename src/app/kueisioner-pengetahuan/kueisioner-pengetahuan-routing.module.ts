import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KueisionerPengetahuanPage } from './kueisioner-pengetahuan.page';

const routes: Routes = [
  {
    path: '',
    component: KueisionerPengetahuanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KueisionerPengetahuanPageRoutingModule {}
