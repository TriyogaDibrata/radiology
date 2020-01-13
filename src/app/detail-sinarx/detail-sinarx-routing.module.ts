import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailSinarxPage } from './detail-sinarx.page';

const routes: Routes = [
  {
    path: '',
    component: DetailSinarxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailSinarxPageRoutingModule {}
