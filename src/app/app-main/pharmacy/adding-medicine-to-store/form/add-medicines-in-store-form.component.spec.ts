import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicinesInStoreFormComponent } from './add-medicines-in-store-form.component';

describe('AddMedicinesInStoreFormComponent', () => {
  let component: AddMedicinesInStoreFormComponent;
  let fixture: ComponentFixture<AddMedicinesInStoreFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMedicinesInStoreFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedicinesInStoreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
