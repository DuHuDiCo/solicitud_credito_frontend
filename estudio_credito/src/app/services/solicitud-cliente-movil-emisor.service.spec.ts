import { TestBed } from '@angular/core/testing';

import { SolicitudClienteMovilEmisorService } from './solicitud-cliente-movil-emisor.service';

describe('SolicitudClienteMovilEmisorService', () => {
  let service: SolicitudClienteMovilEmisorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudClienteMovilEmisorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
