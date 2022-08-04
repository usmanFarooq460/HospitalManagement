import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { PharmacyRoutingModule } from "./pharmacy-routing.module";
import { AddingNewMedicineComponent } from "./adding-new-medicine/adding-new-medicine.component";
import { MedicineSaleInvoiceComponent } from "./medicine-sale-invoice/medicine-sale-invoice.component";
import { CommonUiModule } from "./../../common-ui/common-ui.module";
import { DefDrugTypeComponent } from "./adding-new-medicine/def-drug-type/def-drug-type.component";

@NgModule({
  declarations: [
    AddingNewMedicineComponent,
    MedicineSaleInvoiceComponent,
    DefDrugTypeComponent,
  ],
  imports: [
    CommonModule,
    PharmacyRoutingModule,
    CommonUiModule,
    ReactiveFormsModule,
  ],
})
export class PharmacyModule {}
