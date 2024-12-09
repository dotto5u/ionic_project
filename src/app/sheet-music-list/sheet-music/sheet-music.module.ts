import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SheetMusicPageRoutingModule } from './sheet-music-routing.module';

import { SheetMusicPage } from './sheet-music.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SheetMusicPageRoutingModule
  ],
  declarations: [SheetMusicPage]
})
export class SheetMusicPageModule {}
