import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SheetMusicFormPage } from './sheet-music-form.page';

const routes: Routes = [
  {
    path: '',
    component: SheetMusicFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SheetMusicFormPageRoutingModule {}
