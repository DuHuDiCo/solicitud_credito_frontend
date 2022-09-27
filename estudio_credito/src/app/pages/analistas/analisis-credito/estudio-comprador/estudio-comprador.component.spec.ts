import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudioCompradorComponent } from './estudio-comprador.component';

describe('EstudioCompradorComponent', () => {
  let component: EstudioCompradorComponent;
  let fixture: ComponentFixture<EstudioCompradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudioCompradorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudioCompradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
