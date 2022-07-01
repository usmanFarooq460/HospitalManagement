import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDefineComponent } from "./user-define/user-define.component"


const routes: Routes = [
  { path: 'user-define', component:UserDefineComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefinitonsRoutingModule { }
