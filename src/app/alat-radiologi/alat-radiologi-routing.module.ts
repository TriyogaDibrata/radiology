import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlatRadiologiPage } from './alat-radiologi.page';

const routes: Routes = [
  {
    path: '',
    component: AlatRadiologiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlatRadiologiPageRoutingModule {}
