import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudioCodeudorComponent } from './estudio-codeudor.component';

describe('EstudioCodeudorComponent', () => {
  let component: EstudioCodeudorComponent;
  let fixture: ComponentFixture<EstudioCodeudorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudioCodeudorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudioCodeudorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
