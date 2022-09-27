import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAnalistaComponent } from './sidebar-analista.component';

describe('SidebarAnalistaComponent', () => {
  let component: SidebarAnalistaComponent;
  let fixture: ComponentFixture<SidebarAnalistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarAnalistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarAnalistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
