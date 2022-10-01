import { TestBed } from '@angular/core/testing';

import { SolicitudClienteMovilService } from './solicitud-cliente-movil.service';

describe('SolicitudClienteMovilService', () => {
  let service: SolicitudClienteMovilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudClienteMovilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
