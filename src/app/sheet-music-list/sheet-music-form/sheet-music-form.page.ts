import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SheetMusic } from 'src/app/models/sheet-music/sheet-music.model';
import { OptionsService } from 'src/app/services/options/options.service';
import { Picture, PictureService } from 'src/app/services/picture/picture.service';
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
  tempPicture: Picture | null = null;

  difficultyOptions = new Map<string, string>();
  typeOptions = new Map<string, string>();

  constructor(
    private sheetMusicService: SheetMusicService, 
    private optionsService: OptionsService, 
    private pictureService: PictureService, 
    private toastService: ToastService, 
    private alertController: AlertController, 
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.isEditing = true;
      
      try {
        this.sheet = await this.getSheetMusicById(id);
      } catch (error) {
        this.toastService.presentToast('danger', 'Une erreur est survenue lors du chargement des données', '/sheet-music-list');
      }
    }

    this.difficultyOptions = this.optionsService.getDifficultyOptions();
    this.typeOptions = this.optionsService.getTypeOptions();
  }

  ngOnDestroy() {
    if (this.tempPicture) {
      this.pictureService.deletePicture(this.tempPicture.imagePath);
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

  async takePicture() {
    try {
      const picture: Picture = await this.pictureService.takePicture();
      
      if (picture) {
        const oldImagePath = this.sheet.picture?.imagePath;
  
        if (oldImagePath && oldImagePath !== 'default') {
          this.pictureService.deletePicture(oldImagePath);
        }
  
        this.sheet.imagePath = picture.imagePath;
        this.sheet.setPicture(picture);
        this.tempPicture = picture;
      }
    } catch (error) {}
  }
  
  async submit(form: NgForm) {
    if (form.invalid) return;

    this.isEditing ? this.updateSheetMusic() : this.addSheetMusic();
  }

  async addSheetMusic() {
    this.sheetMusicService.add(this.sheet).subscribe({
      next: () => {
        this.tempPicture = null;
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
                this.tempPicture = null;
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
