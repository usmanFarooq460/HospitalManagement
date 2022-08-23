import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { PharmacyRoutingModule } from "./pharmacy-routing.module";
import { AddingNewMedicineComponent } from "./adding-new-medicine/adding-new-medicine.component";
import { MedicineSaleInvoiceComponent } from "./medicine-sale-invoice/medicine-sale-invoice.component";
import { CommonUiModule } from "./../../common-ui/common-ui.module";
import { DefDrugTypeComponent } from "./adding-new-medicine/def-drug-type/def-drug-type.component";
import { DefinePharmacyStoreComponent } from "./define-pharmacy-store/define-pharmacy-store.component";
import { DefineRackComponent } from "./define-rack/define-rack.component";
import { CustomPipeModule } from "./../custom-pipe/custom-pipe.module";
import {
  AddMedicinesInStoreFormComponent,
  AddMedicinesInStoreHistoryComponent,
} from "./adding-medicine-to-store";

@NgModule({
  declarations: [
    AddingNewMedicineComponent,
    MedicineSaleInvoiceComponent,
    DefDrugTypeComponent,
    DefinePharmacyStoreComponent,
    DefineRackComponent,
    AddMedicinesInStoreFormComponent,
    AddMedicinesInStoreHistoryComponent,
  ],
  imports: [
    CommonModule,
    PharmacyRoutingModule,
    CommonUiModule,
    ReactiveFormsModule,
    CustomPipeModule,
  ],
})
export class PharmacyModule {}
