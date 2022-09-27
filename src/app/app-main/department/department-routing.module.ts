import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DefineDepartmentComponent } from "./define-department/define-department.component";
const routes: Routes = [{ path: "", component: DefineDepartmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentRoutingModule {}
