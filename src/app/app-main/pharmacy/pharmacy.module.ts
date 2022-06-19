import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PharmacyRoutingModule } from "./pharmacy-routing.module";
import { AddingNewMedicineComponent } from './adding-new-medicine/adding-new-medicine.component';
import { MedicineSaleInvoiceComponent } from './medicine-sale-invoice/medicine-sale-invoice.component';

@NgModule({
  declarations: [AddingNewMedicineComponent, MedicineSaleInvoiceComponent],
  imports: [CommonModule, PharmacyRoutingModule],
})
export class PharmacyModule {}
