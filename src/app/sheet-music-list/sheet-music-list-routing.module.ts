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
    path: ':id',
    loadChildren: () => import('./sheet-music/sheet-music.module').then( m => m.SheetMusicPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SheetMusicListPageRoutingModule {}
