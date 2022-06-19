import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardGuard } from "src/app/accounts/auth-guard.guard";
import { AddingNewMedicineComponent } from "./adding-new-medicine/adding-new-medicine.component";
import { MedicineSaleInvoiceComponent } from "./medicine-sale-invoice/medicine-sale-invoice.component"

const routes: Routes = [
  { path: "Add-new-medicine", component: AddingNewMedicineComponent,canActivate:[AuthGuardGuard] },
  { path: "Medicine-sale-invoice", component:MedicineSaleInvoiceComponent,canActivate:[AuthGuardGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PharmacyRoutingModule {}
 