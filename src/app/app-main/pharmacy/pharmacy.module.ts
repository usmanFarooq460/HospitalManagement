import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PharmacyRoutingModule } from "./pharmacy-routing.module";
import { AddingNewMedicineComponent } from "./adding-new-medicine/adding-new-medicine.component";
import { MedicineSaleInvoiceComponent } from "./medicine-sale-invoice/medicine-sale-invoice.component";
import { CommonUiModule } from "./../../common-ui/common-ui.module"

@NgModule({
  declarations: [AddingNewMedicineComponent, MedicineSaleInvoiceComponent],
  imports: [CommonModule, PharmacyRoutingModule, CommonUiModule],
})
export class PharmacyModule {}
