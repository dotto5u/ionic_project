import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SheetMusic } from 'src/app/models/sheet-music/sheet-music.model';
import { OptionsService } from 'src/app/services/options/options.service';
import { SheetMusicService } from 'src/app/services/sheet-music/sheet-music.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-sheet-music-view',
  templateUrl: './sheet-music-view.page.html',
  styleUrls: ['./sheet-music-view.page.scss'],
})
export class SheetMusicViewPage implements OnInit {
  sheet: SheetMusic = new SheetMusic();

  constructor(
    private sheetMusicService: SheetMusicService, 
    private optionsService: OptionsService, 
    private toastService: ToastService, 
    private alertController: AlertController, 
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      try {
        this.sheet = await this.getSheetMusicById(id);
      } catch (error) {
        this.toastService.presentToast('danger', 'Une erreur est survenue lors du chargement des données', '/sheet-music-list');
      }
    }
  }

  private async getSheetMusicById(id: string): Promise<SheetMusic> {
    return new Promise((resolve, reject) => {
      this.sheetMusicService.getOne(id).subscribe({
        next: (sheet) => {
          resolve(sheet);
        },
        error: (error) => {
          reject(error);
        }
      });
    });
  }

  getDifficultyValue(): string {
    return this.optionsService.getDifficultyValue(this.sheet.difficulty);
  }

  getTypeValue(): string {
    return this.optionsService.getTypeValue(this.sheet.type);
  }

  updateIsLearned() {
    const previousIsLearnedState = this.sheet.isLearned;

    this.sheet.isLearned = !this.sheet.isLearned;

    this.sheetMusicService.update(this.sheet).subscribe({
      error: () => {
        this.sheet.isLearned = previousIsLearnedState;
        this.toastService.presentToast('danger', 'Une erreur est survenue lors de la suppression de la partition');
      }
    });
  }

  async deleteSheetMusic() {
    const alert = await this.alertController.create({
      header: 'Confirmer la suppression',
      message: 'Êtes-vous sûr de vouloir supprimer cette partition ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
        },
        {
          text: 'Confirmer',
          handler: () => {
            this.sheetMusicService.delete(this.sheet.id).subscribe({
              next: () => {
                this.toastService.presentToast('success', 'La partition a été supprimée avec succès', '/sheet-music-list')
              },
              error: () => {
                this.toastService.presentToast('danger', 'Erreur lors de la suppression de la partition');
              }
            });
          }
        }
      ]
    });

    await alert.present();
  }
}
