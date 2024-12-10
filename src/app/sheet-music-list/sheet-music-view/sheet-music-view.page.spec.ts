import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SheetMusicViewPage } from './sheet-music-view.page';

describe('SheetMusicViewPage', () => {
  let component: SheetMusicViewPage;
  let fixture: ComponentFixture<SheetMusicViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetMusicViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
