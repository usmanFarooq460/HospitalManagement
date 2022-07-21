import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDefineComponent } from "./user-define/user-define.component"
import { DefineScreenRightsComponent } from "./define-screen-rights/define-screen-rights.component"

const routes: Routes = [
  { path: 'user-define', component:UserDefineComponent },
  { path: 'screen-rights', component:DefineScreenRightsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefinitonsRoutingModule { }
