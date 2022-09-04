import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardGuard } from "src/app/accounts/auth-guard.guard";
import { AddingNewMedicineComponent } from "./adding-new-medicine/adding-new-medicine.component";
import { DefDrugTypeComponent } from "./adding-new-medicine/def-drug-type/def-drug-type.component";
import { DefinePharmacyStoreComponent } from "./define-pharmacy-store/define-pharmacy-store.component";
import { DefineRackComponent } from "./define-rack/define-rack.component";
import { AddMedicinesInStoreHistoryComponent,AddMedicinesInStoreFormComponent } from "./adding-medicine-to-store"
import { SaleInvoiceHistoryComponent,SaleInvoiceFormComponent } from "./sale-invoice"
const routes: Routes = [
  {
    path: "Add-new-medicine",
    component: AddingNewMedicineComponent,
    canActivate: [AuthGuardGuard],
  },
  // {
  //   path: "Medicine-sale-invoice",
  //   component: MedicineSaleInvoiceComponent,
  //   canActivate: [AuthGuardGuard],
  // },
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
  {
    path: "def-rack",
    component: DefineRackComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: "add-item-in-store-history",
    component: AddMedicinesInStoreHistoryComponent,
    canActivate: [AuthGuardGuard],
  }, 
  {
    path: "add-item-in-store-form",
    component: AddMedicinesInStoreFormComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: "sale-invoice-history",
    component: SaleInvoiceHistoryComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: "sale-invoice-form",
    component: SaleInvoiceFormComponent,
    canActivate: [AuthGuardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PharmacyRoutingModule {}
