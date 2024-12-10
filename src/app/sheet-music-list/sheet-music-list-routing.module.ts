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
    loadChildren: () => import('./sheet-music-new/sheet-music-new.module').then( m => m.SheetMusicNewPageModule)
  },
  {
    path: ':id/edit',
    loadChildren: () => import('./sheet-music-edit/sheet-music-edit.module').then( m => m.SheetMusicEditPageModule)
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
