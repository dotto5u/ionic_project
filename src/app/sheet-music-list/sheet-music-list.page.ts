import { Component, OnInit } from '@angular/core';
import { SheetMusicService } from '../services/sheet-music/sheet-music.service';
import { SheetMusic } from '../models/sheet-music/sheet-music.model';

@Component({
  selector: 'app-sheet-music-list',
  templateUrl: './sheet-music-list.page.html',
  styleUrls: ['./sheet-music-list.page.scss'],
})
export class SheetMusicListPage implements OnInit {
  sheetMusic: SheetMusic[] = [];

  constructor(private sheetMusicService: SheetMusicService) { }

  ngOnInit() {
    this.sheetMusicService.getAll().subscribe(data => {
      this.sheetMusic = data;
      console.log('Partitions récupérées:', this.sheetMusic);
    })
  }
}
