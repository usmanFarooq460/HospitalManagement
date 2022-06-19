import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardsRoutingModule } from "./dashboards-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TodoListComponent } from "./dashboard/todo-list/todo-list.component";
import { TodoComponent } from "./dashboard/todo-list/todo/todo.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ChartsModule } from "ng2-charts";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    DashboardComponent,
    TodoListComponent,
    TodoComponent,
    TodoComponent,
  ],
  imports: [
    CommonModule,
    DashboardsRoutingModule,
    ChartsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DashboardsModule {}
