import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppointmentComponent } from "./appointment/appointment.component";
import { AppointmentsRoutingModule } from "./appointments-routing.module";
import { CommonUiModule } from "./../../common-ui/common-ui.module";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { CustomPipeModule } from "./../custom-pipe/custom-pipe.module";

@NgModule({
  declarations: [AppointmentComponent],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    CommonUiModule,
    ReactiveFormsModule,
    FormsModule,
    CustomPipeModule,
  ],
})
export class AppointmentsModule {}
