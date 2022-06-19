import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineSaleInvoiceComponent } from './medicine-sale-invoice.component';

describe('MedicineSaleInvoiceComponent', () => {
  let component: MedicineSaleInvoiceComponent;
  let fixture: ComponentFixture<MedicineSaleInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineSaleInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineSaleInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
