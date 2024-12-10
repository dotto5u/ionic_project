import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SheetMusicViewPageRoutingModule } from './sheet-music-view-routing.module';

import { SheetMusicViewPage } from './sheet-music-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SheetMusicViewPageRoutingModule
  ],
  declarations: [SheetMusicViewPage]
})
export class SheetMusicViewPageModule {}
