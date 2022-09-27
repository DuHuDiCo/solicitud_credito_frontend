import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudCreadaComponent } from './solicitud-creada.component';

describe('SolicitudCreadaComponent', () => {
  let component: SolicitudCreadaComponent;
  let fixture: ComponentFixture<SolicitudCreadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudCreadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudCreadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
