import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonUiModule } from "./../../common-ui/common-ui.module"

import { DefinitonsRoutingModule } from './definitons-routing.module';
import { UserDefineComponent } from './user-define/user-define.component';


@NgModule({
  declarations: [
    UserDefineComponent
  ],
  imports: [
    CommonModule,
    CommonUiModule,
    DefinitonsRoutingModule
  ]
})
export class DefinitonsModule { }
