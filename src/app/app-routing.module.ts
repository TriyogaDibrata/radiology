import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'sinarx',
    loadChildren: () => import('./sinarx/sinarx.module').then( m => m.SinarxPageModule)
  },
  {
    path: 'alat-radiologi',
    loadChildren: () => import('./alat-radiologi/alat-radiologi.module').then( m => m.AlatRadiologiPageModule)
  },
  {
    path: 'risiko-radiasi',
    loadChildren: () => import('./risiko-radiasi/risiko-radiasi.module').then( m => m.RisikoRadiasiPageModule)
  },
  {
    path: 'bukti-edukasi',
    loadChildren: () => import('./bukti-edukasi/bukti-edukasi.module').then( m => m.BuktiEdukasiPageModule)
  },
  {
    path: 'detail-sinarx/:id',
    loadChildren: () => import('./detail-sinarx/detail-sinarx.module').then( m => m.DetailSinarxPageModule)
  },
  {
    path: 'detail-alat-radiologi/:id',
    loadChildren: () => import('./detail-alat-radiologi/detail-alat-radiologi.module').then( m => m.DetailAlatRadiologiPageModule)
  },
  {
    path: 'detail-risiko/:id',
    loadChildren: () => import('./detail-risiko/detail-risiko.module').then( m => m.DetailRisikoPageModule)
  },
  {
    path: 'pdf-bukti/:nama',
    loadChildren: () => import('./pdf-bukti/pdf-bukti.module').then( m => m.PdfBuktiPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
