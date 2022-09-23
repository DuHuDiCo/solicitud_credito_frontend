import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespaldoCedulaCodeudorComponent } from './respaldo-cedula-codeudor.component';

describe('RespaldoCedulaCodeudorComponent', () => {
  let component: RespaldoCedulaCodeudorComponent;
  let fixture: ComponentFixture<RespaldoCedulaCodeudorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespaldoCedulaCodeudorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespaldoCedulaCodeudorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
