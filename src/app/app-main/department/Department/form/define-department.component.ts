import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { param } from "jquery";
import { BaseActions } from "src/app/shared/shared-classes/base-actions";
import { DepartmentService } from "../../department.service";

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
  constructor(
    private service: DepartmentService,
    private activatedRoute: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    let paramId = this.activatedRoute.snapshot.params;
    console.log("updated id : ", paramId?.id);
    this.updateId = paramId?.id;
    if (this.updateId) this.getById(this.updateId);
  }

  getById(id) {
    this.service.getyDepartmentById(id).subscribe(
      (resp) => {
        console.log("get by id method resp: ", resp);
        this.departmentName = resp.DepartmentName;
        this.wardNameList = resp.wardList;
      },
      (err) => {
        console.log("err: ", err);
        this.errorPopup(err.message);
      }
    );
  }

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
    if (this.detailEditMode == true) {
      this.wardNameList[this.updateRowIndex].wardName = this.wardName;
      this.updateRowIndex = -1;
      this.detailEditMode = false;
    } else {
      this.wardNameList.push({
        wardName: wardName,
      });
    }
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
    this.updateId = undefined;
  }

  Save() {
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
  update(id) {
    if (this.departmentName == undefined || this.departmentName == null) {
      this.WarningPopup("Please add Department name");
      return;
    }
    let finalObject = {};
    finalObject = {
      DepartmentName: this.departmentName,
      wardList: this.wardNameList,
    };

    this.service.updateDepartment(id, finalObject).subscribe(
      (resp) => {
        console.log("Updated successfully: ", resp);
        this.SuccessPopup("Updated successfully");
        this.clear();
      },
      (err) => {
        this.errorPopup(err.message);
        console.log("err: ", err);
      }
    );
  }
}
