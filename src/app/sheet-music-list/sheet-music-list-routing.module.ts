import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SheetMusicListPage } from './sheet-music-list.page';

const routes: Routes = [
  {
    path: '',
    component: SheetMusicListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SheetMusicListPageRoutingModule {}
