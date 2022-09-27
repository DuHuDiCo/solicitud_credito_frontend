import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCreditosAnalistaComponent } from './ver-creditos-analista.component';

describe('VerCreditosAnalistaComponent', () => {
  let component: VerCreditosAnalistaComponent;
  let fixture: ComponentFixture<VerCreditosAnalistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerCreditosAnalistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerCreditosAnalistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
