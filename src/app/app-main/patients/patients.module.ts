import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CommonUiModule } from "./../../common-ui/common-ui.module";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { CustomPipeModule } from "./../custom-pipe/custom-pipe.module";
import { PatientsRoutingModule } from "./patients-routing.module";
import { AddPatientsComponent } from "./add-patients/add-patients.component";

@NgModule({
  declarations: [AddPatientsComponent],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    CommonUiModule,
    ReactiveFormsModule,
    FormsModule,
    CustomPipeModule,
  ],
})
export class PatientsModule {}
