import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SheetMusicPage } from './sheet-music.page';

describe('SheetMusicPage', () => {
  let component: SheetMusicPage;
  let fixture: ComponentFixture<SheetMusicPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetMusicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
