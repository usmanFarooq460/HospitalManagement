import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DepartmentRoutingModule } from "./department-routing.module";
import { CommonUiModule } from "./../../common-ui/common-ui.module";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { CustomPipeModule } from "./../custom-pipe/custom-pipe.module";
import { DefineDepartmentComponent } from "./define-department/define-department.component";

@NgModule({
  declarations: [DefineDepartmentComponent],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    CommonUiModule,
    ReactiveFormsModule,
    FormsModule,
    CustomPipeModule,
  ],
})
export class DepartmentModule {}
