import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinarxPage } from './sinarx.page';

const routes: Routes = [
  {
    path: '',
    component: SinarxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinarxPageRoutingModule {}
