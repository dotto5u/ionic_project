import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SheetMusic } from 'src/app/models/sheet-music/sheet-music.model';
import { OptionsService } from 'src/app/services/options/options.service';
import { SheetMusicService } from 'src/app/services/sheet-music/sheet-music.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-sheet-music-form',
  templateUrl: './sheet-music-form.page.html',
  styleUrls: ['./sheet-music-form.page.scss'],
})
export class SheetMusicFormPage implements OnInit {
  isEditing: boolean = false; 
  sheet: SheetMusic = new SheetMusic();

  difficultyOptions = new Map<string, string>();
  typeOptions = new Map<string, string>();

  constructor(
    private sheetMusicService: SheetMusicService, 
    private optionsService: OptionsService, 
    private toastService: ToastService, 
    private alertController: AlertController, 
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.isEditing = true;
      this.getSheetMusicById(id)
    }

    this.difficultyOptions = this.optionsService.getDifficultyOptions();
    this.typeOptions = this.optionsService.getTypeOptions();
  }

  private getSheetMusicById(id: string) {
    this.sheetMusicService.getOne(id).subscribe({
      next: (sheet) => {
        this.sheet = sheet;
      },
      error: () => {
        this.toastService.presentToast('danger', 'Une erreur est survenue lors du chargement de la partition', '/sheet-music-list');
      }
    });
  }
  
  submit(form: NgForm) {
    if (form.invalid) return;

    this.isEditing ? this.updateSheetMusic() : this.addSheetMusic();
  }

  addSheetMusic() {
    this.sheetMusicService.add(this.sheet).subscribe({
      next: () => {
        this.toastService.presentToast('success', 'La partition a été créée avec succès', '/sheet-music-list');
      },
      error: () => {
        this.toastService.presentToast('danger', 'Une erreur est survenue lors de la création de la partition');
      }
    });
  }

  async updateSheetMusic() {
    const alert = await this.alertController.create({
      header: 'Confirmer la mise à jour',
      message: 'Êtes-vous sûr de vouloir enregistrer les modifications ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
        },
        {
          text: 'Confirmer',
          handler: () => {
            this.sheetMusicService.update(this.sheet).subscribe({
              next: () => {
                this.toastService.presentToast('success', 'La partition a été mise à jour avec succès', '/sheet-music-list');
              },
              error: () => {
                this.toastService.presentToast('danger', 'Une erreur est survenue lors de la mise à jour de la partition');
              }
            });
          }
        }
      ]
    });

    await alert.present();
  }
}
