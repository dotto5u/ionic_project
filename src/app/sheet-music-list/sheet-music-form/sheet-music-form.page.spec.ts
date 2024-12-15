import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SheetMusicFormPage } from './sheet-music-form.page';

describe('SheetMusicFormPage', () => {
  let component: SheetMusicFormPage;
  let fixture: ComponentFixture<SheetMusicFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetMusicFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
