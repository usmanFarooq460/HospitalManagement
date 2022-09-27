import { Component, OnInit } from "@angular/core";
import { BaseActions } from "src/app/shared/shared-classes/base-actions";
import { DepartmentService } from "../department.service";

@Component({
  selector: "app-define-department",
  templateUrl: "./define-department.component.html",
  styleUrls: ["./define-department.component.scss"],
})
export class DefineDepartmentComponent extends BaseActions implements OnInit {
  departmentName: string;
  updateId: string = undefined;
  wardName: string = undefined;
  wardNameList = [];
  detailEditMode: boolean = false;
  updateRowIndex: number = -1;
  constructor(private service: DepartmentService) {
    super();
  }

  ngOnInit(): void {}

  addWardNo(wardName) {
    if (wardName == undefined || wardName == "") {
      return;
    }
    for (let i = 0; i < this.wardNameList.length; i++) {
      if (this.wardNameList[i].wardName == wardName) {
        console.log("already found");
        return;
      }
    }
    console.log("update row index: ", this.updateRowIndex);
    if (this.detailEditMode == true) {
      this.wardNameList[this.updateRowIndex].wardName = this.wardName;
      this.updateRowIndex = -1;
      this.detailEditMode = false;
    } else {
      this.wardNameList.push({
        wardName: wardName,
      });
    }
    console.log("ward name: ", wardName);
    console.log("ward Name list ", this.wardNameList);
    this.wardName = undefined;
  }

  editDetailRecordRow(editObject, index) {
    this.detailEditMode = true;
    this.updateRowIndex = index;
    this.wardName = editObject;
  }

  deleteDetailRecordRow(index) {
    this.wardNameList.splice(index, 1);
  }

  clear() {
    this.wardNameList = [];
    this.wardName = undefined;
    this.departmentName = undefined;
  }

  Save() {
    console.log("deparmtent name : ", this.departmentName);
    let finalObject = {};
    if (this.departmentName == undefined || this.departmentName == null) {
      this.WarningPopup("Please add Department name");
      return;
    }
    finalObject = {
      DepartmentName: this.departmentName,
      wardList: this.wardNameList,
    };

    this.service.saveDepartment(finalObject).subscribe(
      (resp) => {
        console.log("saved successfully: ", resp);
        this.SuccessPopup("saved successfully");
        this.clear();
      },
      (err) => {
        console.log("err: ", err);
      }
    );
  }
}
