import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailRisikoPage } from './detail-risiko.page';

const routes: Routes = [
  {
    path: '',
    component: DetailRisikoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailRisikoPageRoutingModule {}
