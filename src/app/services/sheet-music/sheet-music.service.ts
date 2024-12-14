import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { SheetMusic } from 'src/app/models/sheet-music/sheet-music.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SheetMusicService {
  private collectionPath = '/sheet-music'
  private sheetMusicRef: AngularFirestoreCollection<SheetMusic>;

  constructor(firestore: AngularFirestore) {
    this.sheetMusicRef = firestore.collection(this.collectionPath);
  }

  getAll(): Observable<SheetMusic[]> {
    return this.sheetMusicRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(doc => {
          const data = doc.payload.doc.data() as SheetMusic;
          const id = doc.payload.doc.id;
          
          return new SheetMusic(id, {...data});
        })
      )
    );
  }

  getOne(id: string): Observable<SheetMusic> {
    return new Observable(obs => {
      this.sheetMusicRef.doc(id).get().subscribe({
        next: doc => {
          if (doc.exists) {
            obs.next(new SheetMusic(id, {...doc.data()} as SheetMusic));
          } else {
            obs.error(new Error(`${id} not found`));
          }
          obs.complete();
        },
        error: error => {
          obs.error(error);
        },
      });
    });
  }

  updateIsLearned(id: string, isLearned: boolean): Observable<void> {
    return new Observable(obs => {
      this.sheetMusicRef.doc(id).update({ isLearned }).then(() => {
        obs.next();
        obs.complete();
      }).catch(error => {
        obs.error(error);
      });
    });
  }
}
