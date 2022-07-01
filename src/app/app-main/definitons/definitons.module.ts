import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefinitonsRoutingModule } from './definitons-routing.module';
import { UserDefineComponent } from './user-define/user-define.component';


@NgModule({
  declarations: [
    UserDefineComponent
  ],
  imports: [
    CommonModule,
    DefinitonsRoutingModule
  ]
})
export class DefinitonsModule { }
