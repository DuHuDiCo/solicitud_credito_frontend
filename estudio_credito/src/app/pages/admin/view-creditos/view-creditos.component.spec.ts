import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCreditosComponent } from './view-creditos.component';

describe('ViewCreditosComponent', () => {
  let component: ViewCreditosComponent;
  let fixture: ComponentFixture<ViewCreditosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCreditosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCreditosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
