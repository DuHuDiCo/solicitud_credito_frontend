import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditoAnalizadoComponent } from './credito-analizado.component';

describe('CreditoAnalizadoComponent', () => {
  let component: CreditoAnalizadoComponent;
  let fixture: ComponentFixture<CreditoAnalizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditoAnalizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditoAnalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
