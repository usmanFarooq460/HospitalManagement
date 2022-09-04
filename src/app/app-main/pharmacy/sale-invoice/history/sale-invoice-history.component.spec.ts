import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleInvoiceHistoryComponent } from './sale-invoice-history.component';

describe('SaleInvoiceHistoryComponent', () => {
  let component: SaleInvoiceHistoryComponent;
  let fixture: ComponentFixture<SaleInvoiceHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleInvoiceHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleInvoiceHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
