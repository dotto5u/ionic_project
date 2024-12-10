import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SheetMusicEditPageRoutingModule } from './sheet-music-edit-routing.module';

import { SheetMusicEditPage } from './sheet-music-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SheetMusicEditPageRoutingModule
  ],
  declarations: [SheetMusicEditPage]
})
export class SheetMusicEditPageModule {}
