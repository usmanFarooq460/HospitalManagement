import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDefineComponent } from './user-define.component';

describe('UserDefineComponent', () => {
  let component: UserDefineComponent;
  let fixture: ComponentFixture<UserDefineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDefineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDefineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
