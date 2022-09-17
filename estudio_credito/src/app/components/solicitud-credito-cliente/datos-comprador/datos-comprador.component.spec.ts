import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosCompradorComponent } from './datos-comprador.component';

describe('DatosCompradorComponent', () => {
  let component: DatosCompradorComponent;
  let fixture: ComponentFixture<DatosCompradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosCompradorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosCompradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
