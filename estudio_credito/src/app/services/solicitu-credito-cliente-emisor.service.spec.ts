import { TestBed } from '@angular/core/testing';

import { SolicituCreditoClienteEmisorService } from './solicitu-credito-cliente-emisor.service';

describe('SolicituCreditoClienteEmisorService', () => {
  let service: SolicituCreditoClienteEmisorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicituCreditoClienteEmisorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
