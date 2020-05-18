import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KueisionerPage } from './kueisioner.page';

const routes: Routes = [
  {
    path: '',
    component: KueisionerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KueisionerPageRoutingModule {}
