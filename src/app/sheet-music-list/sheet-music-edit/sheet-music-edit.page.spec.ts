import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SheetMusicEditPage } from './sheet-music-edit.page';

describe('SheetMusicEditPage', () => {
  let component: SheetMusicEditPage;
  let fixture: ComponentFixture<SheetMusicEditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetMusicEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
