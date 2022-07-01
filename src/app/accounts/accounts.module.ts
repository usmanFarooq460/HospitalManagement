import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AccountsRoutingModule } from "./accounts-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonUiModule } from "./../common-ui/common-ui.module"

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    CommonUiModule,
    AccountsRoutingModule,
    ReactiveFormsModule,
  ],
})
export class AccountsModule {}
