import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsoYTratamientoDatosPersonalesComponent } from './uso-y-tratamiento-datos-personales.component';

describe('UsoYTratamientoDatosPersonalesComponent', () => {
  let component: UsoYTratamientoDatosPersonalesComponent;
  let fixture: ComponentFixture<UsoYTratamientoDatosPersonalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsoYTratamientoDatosPersonalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsoYTratamientoDatosPersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
