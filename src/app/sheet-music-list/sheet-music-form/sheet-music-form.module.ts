import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SheetMusicFormPageRoutingModule } from './sheet-music-form-routing.module';

import { SheetMusicFormPage } from './sheet-music-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SheetMusicFormPageRoutingModule
  ],
  declarations: [SheetMusicFormPage]
})
export class SheetMusicFormPageModule {}
