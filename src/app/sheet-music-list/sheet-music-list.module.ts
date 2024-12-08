import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SheetMusicListPageRoutingModule } from './sheet-music-list-routing.module';

import { SheetMusicListPage } from './sheet-music-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SheetMusicListPageRoutingModule
  ],
  declarations: [SheetMusicListPage]
})
export class SheetMusicListPageModule {}
