import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { BaseActions } from "src/app/shared/shared-classes/base-actions";
import { StaffService } from "../staff.service";

@Component({
  selector: "app-add-staff",
  templateUrl: "./add-staff.component.html",
  styleUrls: ["./add-staff.component.scss"],
})
export class AddStaffComponent extends BaseActions implements OnInit {
  formdata: any;
  updateId: any;
  staffTypesList = [];
  allStaffHistoryList = [];
  constructor(private service: StaffService, private formBuilder: FormBuilder) {
    super();
    this.initForm();
  }

  initForm() {
    this.formdata = this.formBuilder.group({
      staffType: [null, [Validators.required]],
      Name: [null, [Validators.required]],
      PhoneNo: [null, [Validators.required]],
      Designation: [null, [Validators.required]],
      Salary: [null, [Validators.required]],
      Address: [null],
      Description: [null],
    });
  }

  get form() {
    return this.formdata.controls;
  }

  ngOnInit(): void {
    this.getAllStaffHistory();
    this.getStaffTypes();
  }

  getById(data) {
    this.updateId = data._id;
    this.formdata.patchValue(data);
    this.formdata.patchValue({
      staffType: data.staffType._id,
    });
  }

  getStaffTypes() {
    this.service.getAllStaffTypeHistory().subscribe(
      (resp) => {
        this.staffTypesList = resp;
      },
      (err) => console.log("err", err)
    );
  }

  getAllStaffHistory() {
    this.isLoading = true;
    this.service.getStaffHistory().subscribe(
      (resp) => {
        this.isLoading = false;
        this.allStaffHistoryList = resp;
      },
      (err) => {
        this.isLoading = false;
        this.errorPopup(err.message);
      }
    );
  }

  clear() {
    this.updateId = null;
    this.initForm();
  }

  Save() {
    if (this.formdata.valid == false) {
      this.formdata.markAllAsTouched();
      return;
    }
    this.loaderOn_Save_Update = true;
    this.service.saveStaff(this.formdata.value).subscribe(
      (resp) => {
        this.loaderOn_Save_Update = false;
        this.SuccessPopup("Module Successfully added");
        this.getAllStaffHistory();
        this.clear();
      },
      (err) => {
        this.loaderOn_Save_Update = false;
        this.errorPopup(err.message);
      }
    );
  }

  update(id) {
    if (this.formdata.invalid) {
      this.formdata.markAllAsTouched();
      return;
    }
    this.loaderOn_Save_Update = true;
    this.service.updateStaff(this.updateId, this.formdata.value).subscribe(
      (resp) => {
        this.SuccessPopup("Data has updated");
        this.clear();
        this.loaderOn_Save_Update = false;
        this.getAllStaffHistory();
      },
      (err) => {
        this.errorPopup(err.message);
      }
    );
  }

  deleteStaff(Id) {
    console.log("id for delete : ", Id);
    this.service.deleteStaff(Id).subscribe(
      (resp) => {
        this.SuccessPopup("Deleted Successfully");
        console.log("deleted: ", resp);
        this.getAllStaffHistory();
      },
      (err) => {
        console.log("err in deleting ", err);
        this.errorPopup(err.message);
      }
    );
  }
}
