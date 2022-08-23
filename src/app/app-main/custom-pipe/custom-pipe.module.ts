import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FilterByAllPropertiesPipe } from "./filter-by-all-properties.pipe";

@NgModule({
  declarations: [FilterByAllPropertiesPipe],
  imports: [CommonModule],
  exports: [FilterByAllPropertiesPipe],
})
export class CustomPipeModule {}
