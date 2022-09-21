import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespaldoCedulaComponent } from './respaldo-cedula.component';

describe('RespaldoCedulaComponent', () => {
  let component: RespaldoCedulaComponent;
  let fixture: ComponentFixture<RespaldoCedulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespaldoCedulaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespaldoCedulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
