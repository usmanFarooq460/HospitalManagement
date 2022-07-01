import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WarningPopupsComponent } from "./warning-popups/warning-popups.component";

@NgModule({
  declarations: [WarningPopupsComponent],
  imports: [CommonModule],
  exports: [WarningPopupsComponent],
})
export class CommonUiModule {}
