import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAnalistasComponent } from './dashboard-analistas.component';

describe('DashboardAnalistasComponent', () => {
  let component: DashboardAnalistasComponent;
  let fixture: ComponentFixture<DashboardAnalistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAnalistasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAnalistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
