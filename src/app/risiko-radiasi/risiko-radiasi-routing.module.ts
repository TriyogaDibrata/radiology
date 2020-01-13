import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RisikoRadiasiPage } from './risiko-radiasi.page';

const routes: Routes = [
  {
    path: '',
    component: RisikoRadiasiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RisikoRadiasiPageRoutingModule {}
