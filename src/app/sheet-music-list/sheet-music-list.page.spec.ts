import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SheetMusicListPage } from './sheet-music-list.page';

describe('SheetMusicListPage', () => {
  let component: SheetMusicListPage;
  let fixture: ComponentFixture<SheetMusicListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetMusicListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
