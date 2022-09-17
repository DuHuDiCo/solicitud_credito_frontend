import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciasComercialesComponent } from './referencias-comerciales.component';

describe('ReferenciasComercialesComponent', () => {
  let component: ReferenciasComercialesComponent;
  let fixture: ComponentFixture<ReferenciasComercialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenciasComercialesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferenciasComercialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
