import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffSalaryDashboardComponent } from './staff-salary-dashboard.component';

describe('StaffSalaryDashboardComponent', () => {
  let component: StaffSalaryDashboardComponent;
  let fixture: ComponentFixture<StaffSalaryDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffSalaryDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffSalaryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
