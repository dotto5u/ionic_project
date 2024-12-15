import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SheetMusicListPage } from './sheet-music-list.page';

const routes: Routes = [
  {
    path: '',
    component: SheetMusicListPage
  },
  {
    path: 'new',
    loadChildren: () => import('./sheet-music-form/sheet-music-form.module').then( m => m.SheetMusicFormPageModule)
  },
  {
    path: ':id/edit',
    loadChildren: () => import('./sheet-music-form/sheet-music-form.module').then( m => m.SheetMusicFormPageModule)
  },
  {
    path: ':id/view',
    loadChildren: () => import('./sheet-music-view/sheet-music-view.module').then( m => m.SheetMusicViewPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SheetMusicListPageRoutingModule {}
