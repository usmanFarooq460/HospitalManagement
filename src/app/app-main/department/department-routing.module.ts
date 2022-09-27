import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
  DefineDepartmentComponent,
  DepartmentHistoryComponent,
} from "./Department";
const routes: Routes = [
  { path: "Department-form", component: DefineDepartmentComponent },
  { path: "Department-form/:id", component: DefineDepartmentComponent },
  { path: "Department-history", component: DepartmentHistoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentRoutingModule {}
