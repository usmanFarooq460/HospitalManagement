import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineScreensComponent } from './define-screens.component';

describe('DefineScreensComponent', () => {
  let component: DefineScreensComponent;
  let fixture: ComponentFixture<DefineScreensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefineScreensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefineScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
