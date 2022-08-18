import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinePharmacyStoreComponent } from './define-pharmacy-store.component';

describe('DefinePharmacyStoreComponent', () => {
  let component: DefinePharmacyStoreComponent;
  let fixture: ComponentFixture<DefinePharmacyStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinePharmacyStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinePharmacyStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
