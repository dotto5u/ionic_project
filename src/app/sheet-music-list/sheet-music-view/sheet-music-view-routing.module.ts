import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SheetMusicViewPage } from './sheet-music-view.page';

const routes: Routes = [
  {
    path: '',
    component: SheetMusicViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SheetMusicViewPageRoutingModule {}
