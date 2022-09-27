import { TestBed } from '@angular/core/testing';

import { AnalistaEmisorService } from './analista-emisor.service';

describe('AnalistaEmisorService', () => {
  let service: AnalistaEmisorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalistaEmisorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
