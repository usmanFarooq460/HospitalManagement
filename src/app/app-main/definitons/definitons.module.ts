import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonUiModule } from "./../../common-ui/common-ui.module"
import { ReactiveFormsModule } from '@angular/forms'; 
import { DefinitonsRoutingModule } from './definitons-routing.module';
import { UserDefineComponent } from './user-define/user-define.component';
import { DefineScreenRightsComponent } from './define-screen-rights/define-screen-rights.component';
import { DefineScreensComponent } from './define-screen-rights/define-screens/define-screens.component';


@NgModule({
  declarations: [
    UserDefineComponent,
    DefineScreenRightsComponent,
    DefineScreensComponent
  ],
  imports: [
    CommonModule,
    CommonUiModule,
    ReactiveFormsModule,
    DefinitonsRoutingModule
  ]
})
export class DefinitonsModule { }
