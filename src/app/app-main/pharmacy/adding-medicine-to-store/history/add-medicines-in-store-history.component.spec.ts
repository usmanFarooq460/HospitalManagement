import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicinesInStoreHistoryComponent } from './add-medicines-in-store-history.component';

describe('AddMedicinesInStoreHistoryComponent', () => {
  let component: AddMedicinesInStoreHistoryComponent;
  let fixture: ComponentFixture<AddMedicinesInStoreHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMedicinesInStoreHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedicinesInStoreHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
