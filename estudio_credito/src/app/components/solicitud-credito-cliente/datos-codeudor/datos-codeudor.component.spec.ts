import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosCodeudorComponent } from './datos-codeudor.component';

describe('DatosCodeudorComponent', () => {
  let component: DatosCodeudorComponent;
  let fixture: ComponentFixture<DatosCodeudorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosCodeudorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosCodeudorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
