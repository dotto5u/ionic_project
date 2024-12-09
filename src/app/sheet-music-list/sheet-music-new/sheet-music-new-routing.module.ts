import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SheetMusicNewPage } from './sheet-music-new.page';

const routes: Routes = [
  {
    path: '',
    component: SheetMusicNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SheetMusicNewPageRoutingModule {}
