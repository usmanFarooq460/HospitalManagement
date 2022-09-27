import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StaffRoutingModule } from "./staff-routing.module";
import { AddStaffComponent } from "./add-staff/add-staff.component";
import { StaffTypeComponent } from "./staff-type/staff-type.component";
import { CommonUiModule } from "./../../common-ui/common-ui.module";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { CustomPipeModule } from "./../custom-pipe/custom-pipe.module";
@NgModule({
  declarations: [AddStaffComponent, StaffTypeComponent],
  imports: [
    CommonModule,
    StaffRoutingModule,
    CommonUiModule,
    ReactiveFormsModule,
    FormsModule,
    CustomPipeModule,
  ],
})
export class StaffModule {}
