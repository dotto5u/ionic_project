import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SheetMusicService } from '../services/sheet-music/sheet-music.service';
import { SheetMusic } from '../models/sheet-music/sheet-music.model';

@Component({
  selector: 'app-sheet-music-list',
  templateUrl: './sheet-music-list.page.html',
  styleUrls: ['./sheet-music-list.page.scss'],
})
export class SheetMusicListPage implements OnInit {
  sheetMusic: Array<SheetMusic> = [];

  constructor(private sheetMusicService: SheetMusicService) { }

  ngOnInit() {
    this.getAllSheetMusic();
  }

  private getAllSheetMusic() {
    this.sheetMusicService.getAll().subscribe(data => {
      this.sheetMusic = data;
    });
  }
}
