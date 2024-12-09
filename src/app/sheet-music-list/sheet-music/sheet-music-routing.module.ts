import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SheetMusicPage } from './sheet-music.page';

const routes: Routes = [
  {
    path: '',
    component: SheetMusicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SheetMusicPageRoutingModule {}
