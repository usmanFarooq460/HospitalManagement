import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardGuard } from "src/app/accounts/auth-guard.guard";
import { AddingNewMedicineComponent } from "./adding-new-medicine/adding-new-medicine.component";
import { MedicineSaleInvoiceComponent } from "./medicine-sale-invoice/medicine-sale-invoice.component";
import { DefDrugTypeComponent } from "./adding-new-medicine/def-drug-type/def-drug-type.component";
import { DefinePharmacyStoreComponent } from "./define-pharmacy-store/define-pharmacy-store.component"

const routes: Routes = [
  {
    path: "Add-new-medicine",
    component: AddingNewMedicineComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: "Medicine-sale-invoice",
    component: MedicineSaleInvoiceComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: "def-drug-type",
    component: DefDrugTypeComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: "def-store",
    component: DefinePharmacyStoreComponent,
    canActivate: [AuthGuardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PharmacyRoutingModule {}
