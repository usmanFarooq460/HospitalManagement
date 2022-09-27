import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineDepartmentComponent } from './define-department.component';

describe('DefineDepartmentComponent', () => {
  let component: DefineDepartmentComponent;
  let fixture: ComponentFixture<DefineDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefineDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefineDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
