import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineRackComponent } from './define-rack.component';

describe('DefineRackComponent', () => {
  let component: DefineRackComponent;
  let fixture: ComponentFixture<DefineRackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefineRackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefineRackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
