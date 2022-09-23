import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CedulaCodeudorComponent } from './cedula-codeudor.component';

describe('CedulaCodeudorComponent', () => {
  let component: CedulaCodeudorComponent;
  let fixture: ComponentFixture<CedulaCodeudorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CedulaCodeudorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CedulaCodeudorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
