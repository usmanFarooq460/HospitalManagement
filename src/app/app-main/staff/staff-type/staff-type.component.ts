import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { BaseActions } from "src/app/shared/shared-classes/base-actions";
import { StaffService } from "../staff.service";

@Component({
  selector: "app-staff-type",
  templateUrl: "./staff-type.component.html",
  styleUrls: ["./staff-type.component.scss"],
})
export class StaffTypeComponent extends BaseActions implements OnInit {
  formdata: any;
  updateId: any;

  allScreensList = [];
  constructor(private service: StaffService, private formBuilder: FormBuilder) {
    super();
    this.initForm();
  }

  initForm() {
    this.formdata = this.formBuilder.group({
      staffType: [null, [Validators.required]],
      descp: [null],
    });
  }

  get form() {
    return this.formdata.controls;
  }

  ngOnInit(): void {
    this.getAllScreens();
  }

  getById(data) {
    this.updateId = data._id;
    this.formdata.patchValue({
      staffType: data.staffType,
      descp: data.descp,
    });
  }

  getAllScreens() {
    this.isLoading = true;
    this.service.getAllStaffTypeHistory().subscribe(
      (resp) => {
        this.isLoading = false;
        this.allScreensList = resp;
        console.log("all screens : ", resp);
      },
      (err) => {
        this.isLoading = false;
        this.errorPopup(err.message);
      }
    );
  }

  clear() {
    this.initForm();
    this.updateId = null;
  }

  Save() {
    if (this.formdata.valid == false) {
      this.formdata.markAllAsTouched();
      return;
    }
    console.log("going to save : ", this.formdata.value);
    this.loaderOn_Save_Update = true;
    this.service.saveStaffType(this.formdata.value).subscribe(
      (resp) => {
        this.loaderOn_Save_Update = false;
        this.SuccessPopup("Module Successfully added");
        this.initForm();
      },
      (err) => {
        console.log("save err", err);
        this.loaderOn_Save_Update = false;
        this.errorPopup(err.message);
      }
    );
  }

  updateScreen() {
    if (this.formdata.invalid) {
      this.formdata.markAllAsTouched();
      return;
    }
    this.loaderOn_Save_Update = true;
    console.log("updated id", this.updateId);
    this.service.updateStaffType(this.updateId, this.formdata.value).subscribe(
      (resp) => {
        this.SuccessPopup("Data has updated");
        this.clear();
        this.loaderOn_Save_Update = false;
        this.getAllScreens();
      },
      (err) => {
        this.errorPopup(err.message);
      }
    );
  }
}
