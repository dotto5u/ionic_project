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

  constructor(private sheetMusicService: SheetMusicService, private router: Router) { }

  ngOnInit() {
    this.sheetMusicService.getAll().subscribe(data => {
      this.sheetMusic = data;
    })
  }

  addMusicSheet() {
    this.router.navigate(['/sheet-music-list/new']);
  }

  editMusicSheet(id?: string) {
    if (id) {
      this.router.navigate([`/sheet-music-list/${id}/edit`])
    }
  }

  viewMusicSheet(id?: string) {
    if (id) {
      this.router.navigate([`/sheet-music-list/${id}/view`])
    }
  }

  deleteMusicSheet(id?: string) {
    if (id) {
      // TODO
    }
  }
}
