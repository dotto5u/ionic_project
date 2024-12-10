import { TestBed } from '@angular/core/testing';

import { SheetMusicService } from './sheet-music.service';

describe('SheetMusicService', () => {
  let service: SheetMusicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SheetMusicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
