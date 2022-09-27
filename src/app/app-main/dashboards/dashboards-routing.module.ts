import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { PharmacyDashboardComponent } from "./pharmacy-dashboard/pharmacy-dashboard.component";

const routes: Routes = [
  // { path: "", component: DashboardComponent },
  { path: "", component: PharmacyDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardsRoutingModule {}
