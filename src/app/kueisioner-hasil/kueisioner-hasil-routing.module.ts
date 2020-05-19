import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KueisionerHasilPage } from './kueisioner-hasil.page';

const routes: Routes = [
  {
    path: '',
    component: KueisionerHasilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KueisionerHasilPageRoutingModule {}
