import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WarningPopupsComponent } from "./warning-popups/warning-popups.component";
import { PageTitleComponent } from './page-title/page-title.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [WarningPopupsComponent, PageTitleComponent, LoaderComponent],
  imports: [CommonModule],
  exports: [WarningPopupsComponent,PageTitleComponent,LoaderComponent],
})
export class CommonUiModule {}
