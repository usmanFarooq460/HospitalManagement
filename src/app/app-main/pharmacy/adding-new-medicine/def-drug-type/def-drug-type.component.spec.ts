import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefDrugTypeComponent } from './def-drug-type.component';

describe('DefDrugTypeComponent', () => {
  let component: DefDrugTypeComponent;
  let fixture: ComponentFixture<DefDrugTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefDrugTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefDrugTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
