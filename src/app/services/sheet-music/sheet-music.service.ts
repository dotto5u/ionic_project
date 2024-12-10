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
}
