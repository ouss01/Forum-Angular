import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavdashboardComponent } from './navdashboard.component';

describe('NavdashboardComponent', () => {
  let component: NavdashboardComponent;
  let fixture: ComponentFixture<NavdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
