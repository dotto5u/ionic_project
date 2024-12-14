import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SheetMusic } from 'src/app/models/sheet-music/sheet-music.model';
import { SheetMusicService } from 'src/app/services/sheet-music/sheet-music.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-sheet-music-view',
  templateUrl: './sheet-music-view.page.html',
  styleUrls: ['./sheet-music-view.page.scss'],
})
export class SheetMusicViewPage implements OnInit {
  sheet: SheetMusic;

  constructor(private sheetMusicService: SheetMusicService, private toastService: ToastService, private route: ActivatedRoute) {
    this.sheet = new SheetMusic();
  }

  ngOnInit() {
    this.getSheetMusicById();
  }

  private getSheetMusicById() {
    const id = this.route.snapshot.params['id'];

    if (id) {
      this.sheetMusicService.getOne(id).subscribe({
        next: (sheet) => {
          this.sheet = sheet;
        },
        error: () => {
          this.toastService.presentToast('danger', 'Erreur lors du chargement de la partition', '/sheet-music-list');
        },
      });
    } else {
      this.toastService.presentToast('warning', 'Aucune partition spécifiée', '/sheet-music-list');
    }
  }

  toggleIsLearned() {
    const status = !this.sheet.isLearned;

    this.sheetMusicService.updateIsLearned(this.sheet.id, status).subscribe({
      next: () => {
        this.sheet!.isLearned = status;
      },
    });
  }

  delete() {
    // TODO
  }
}
