import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddStaffComponent } from "./add-staff/add-staff.component";
import { StaffTypeComponent } from "./staff-type/staff-type.component";

const routes: Routes = [
  { path: "add-staff", component: AddStaffComponent },
  { path: "staff-type", component: StaffTypeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffRoutingModule {}
