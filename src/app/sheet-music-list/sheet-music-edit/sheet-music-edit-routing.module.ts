import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SheetMusicEditPage } from './sheet-music-edit.page';

const routes: Routes = [
  {
    path: '',
    component: SheetMusicEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SheetMusicEditPageRoutingModule {}
