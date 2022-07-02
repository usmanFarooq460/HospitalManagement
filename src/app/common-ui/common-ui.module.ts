import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WarningPopupsComponent } from "./warning-popups/warning-popups.component";
import { PageTitleComponent } from './page-title/page-title.component';

@NgModule({
  declarations: [WarningPopupsComponent, PageTitleComponent],
  imports: [CommonModule],
  exports: [WarningPopupsComponent,PageTitleComponent],
})
export class CommonUiModule {}
