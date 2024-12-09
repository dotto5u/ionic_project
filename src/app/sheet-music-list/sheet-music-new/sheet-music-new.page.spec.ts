import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SheetMusicNewPage } from './sheet-music-new.page';

describe('SheetMusicNewPage', () => {
  let component: SheetMusicNewPage;
  let fixture: ComponentFixture<SheetMusicNewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetMusicNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
