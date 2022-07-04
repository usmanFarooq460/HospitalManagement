import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonUiModule } from "./../../common-ui/common-ui.module"
import { ReactiveFormsModule } from '@angular/forms'; 
import { DefinitonsRoutingModule } from './definitons-routing.module';
import { UserDefineComponent } from './user-define/user-define.component';


@NgModule({
  declarations: [
    UserDefineComponent
  ],
  imports: [
    CommonModule,
    CommonUiModule,
    ReactiveFormsModule,
    DefinitonsRoutingModule
  ]
})
export class DefinitonsModule { }
