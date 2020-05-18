import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KueisionerSikapPage } from './kueisioner-sikap.page';

const routes: Routes = [
  {
    path: '',
    component: KueisionerSikapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KueisionerSikapPageRoutingModule {}
