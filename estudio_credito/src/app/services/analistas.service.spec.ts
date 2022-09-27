import { TestBed } from '@angular/core/testing';

import { AnalistasService } from './analistas.service';

describe('AnalistasService', () => {
  let service: AnalistasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalistasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
