import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BaseActions } from "src/app/shared/shared-classes/base-actions";
import { DepartmentService } from "../../department.service";

@Component({
  selector: "app-department-history",
  templateUrl: "./department-history.component.html",
  styleUrls: ["./department-history.component.scss"],
})
export class DepartmentHistoryComponent extends BaseActions implements OnInit {
  departmentList = [];
  constructor(private service: DepartmentService, private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.getHistoryData();
  }

  getHistoryData() {
    this.isLoading = true;
    this.service.getHistoryOfDepartment().subscribe(
      (resp) => {
        this.isLoading = false;
        this.departmentList = resp;
        console.log("history ", resp);
      },
      (err) => {
        this.isLoading = false;
        this.errorPopup("err" + err.message);
      }
    );
  }

  editDerpartment(data) {
    this.router.navigate(["/department/Department-form/" + data._id]);
  }

  deleteDepartment(Id) {
    console.log("id for delete : ", Id);
    this.service.deleteDepartment(Id).subscribe(
      (resp) => {
        this.SuccessPopup("Deleted Successfully");
        console.log("deleted: ", resp);
        this.getHistoryData();
      },
      (err) => {
        console.log("err in deleting ", err);
        this.errorPopup(err.message);
      }
    );
  }
}
