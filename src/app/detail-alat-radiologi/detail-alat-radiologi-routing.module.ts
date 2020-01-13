import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailAlatRadiologiPage } from './detail-alat-radiologi.page';

const routes: Routes = [
  {
    path: '',
    component: DetailAlatRadiologiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailAlatRadiologiPageRoutingModule {}
