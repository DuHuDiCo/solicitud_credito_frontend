import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudCreditoClienteComponent } from './solicitud-credito-cliente.component';

describe('SolicitudCreditoClienteComponent', () => {
  let component: SolicitudCreditoClienteComponent;
  let fixture: ComponentFixture<SolicitudCreditoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudCreditoClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudCreditoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
