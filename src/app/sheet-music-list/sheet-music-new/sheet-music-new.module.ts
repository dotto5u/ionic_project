import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SheetMusicNewPageRoutingModule } from './sheet-music-new-routing.module';

import { SheetMusicNewPage } from './sheet-music-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SheetMusicNewPageRoutingModule
  ],
  declarations: [SheetMusicNewPage]
})
export class SheetMusicNewPageModule {}
