import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserDefineComponent } from "./user-define/user-define.component";
import { DefineScreenRightsComponent } from "./define-screen-rights/define-screen-rights.component";
import { DefineScreensComponent } from "./define-screen-rights/define-screens/define-screens.component";

const routes: Routes = [
  { path: "user-define", component: UserDefineComponent },
  { path: "screen-rights", component: DefineScreenRightsComponent },
  { path: "Define-Screen", component: DefineScreensComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefinitonsRoutingModule {}
