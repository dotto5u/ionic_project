import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Capacitor } from '@capacitor/core';
import { Preferences } from '@capacitor/preferences';

export interface Picture {
  imagePath: string;
  webviewPath?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  constructor(private platform: Platform) {}

  async takePicture(): Promise<Picture> {
    try {
      const capturedPicture = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100,
      });

      const base64Data = await this.readAsBase64(capturedPicture);
      const fileName = `${Date.now()}.jpeg`;
    
      const newFile = await Filesystem.writeFile({
        path: fileName,
        data: base64Data,
        directory: Directory.Data,
      });
    
      const newPicture: Picture = this.platform.is('hybrid')
        ? {
            imagePath: newFile.uri,
            webviewPath: Capacitor.convertFileSrc(newFile.uri),
          }
        : {
            imagePath: fileName,
            webviewPath: capturedPicture.webPath,
          };

      this.savePicture(newPicture).catch((error) => {
        
      });

      return newPicture;
    } catch (error) {
      throw new Error('Impossible de prendre la photo');
    }
  }

  private async savePicture(picture: Picture) {
    try {
      await Preferences.set({
        key: picture.imagePath,
        value: JSON.stringify(picture),
      });
    } catch (error) {
      throw new Error('Impossible de sauvegarder la photo');
    }
  }

  async loadPicture(imagePath: string): Promise<Picture> {
    if (!imagePath) {
      return { imagePath: '' };
    }

    const { value } = await Preferences.get({ key: imagePath });

    if (!value) {
      return { imagePath: 'default' };
    } else {
      const loadedPicture = JSON.parse(value) as Picture;

      if (!this.platform.is('hybrid')) {
        const readFile = await Filesystem.readFile({
          path: loadedPicture.imagePath,
          directory: Directory.Data,
        });

        loadedPicture.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
      }

      return loadedPicture;
    }
  }

  async deletePicture(filePath: string) {
    try {
      await Filesystem.deleteFile({
        path: filePath,
        directory: Directory.Data,
      });
  
      await Preferences.remove({ key: filePath });
    } catch (error) {
      throw new Error('Impossible de supprimer la photo');
    }
  }

  private async readAsBase64(photo: Photo) {
    if (this.platform.is('hybrid')) {
      const file = await Filesystem.readFile({
        path: photo.path!,
        directory: Directory.Data
      });

      return file.data;
    } else {
      const response = await fetch(photo.webPath!);
      const blob = await response.blob();

      return await this.convertBlobToBase64(blob) as string;
    }
  }

  private convertBlobToBase64(blob: Blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onerror = reject;
      reader.onload = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });
  }
}
