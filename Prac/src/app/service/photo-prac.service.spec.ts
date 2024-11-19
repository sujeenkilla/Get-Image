import { TestBed } from '@angular/core/testing';

import { PhotoPracService } from './photo-prac.service';

describe('PhotoPracService', () => {
  let service: PhotoPracService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoPracService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
