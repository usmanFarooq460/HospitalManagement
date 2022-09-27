import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddPatientsComponent } from "./add-patients/add-patients.component";
const routes: Routes = [{ path: "", component: AddPatientsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientsRoutingModule {}
