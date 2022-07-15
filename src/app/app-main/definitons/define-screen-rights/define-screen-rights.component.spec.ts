import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineScreenRightsComponent } from './define-screen-rights.component';

describe('DefineScreenRightsComponent', () => {
  let component: DefineScreenRightsComponent;
  let fixture: ComponentFixture<DefineScreenRightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefineScreenRightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefineScreenRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
