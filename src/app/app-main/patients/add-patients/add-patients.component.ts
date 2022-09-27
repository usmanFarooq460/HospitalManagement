import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { BaseActions } from "src/app/shared/shared-classes/base-actions";
import { PatientsService } from "../patients.service";
// import { PatientsService } from "../patients.service";

@Component({
  selector: "app-add-patients",
  templateUrl: "./add-patients.component.html",
  styleUrls: ["./add-patients.component.scss"],
})
export class AddPatientsComponent extends BaseActions implements OnInit {
  formdata: any;
  updateId: any;
  allPatientsHistoryList = [];
  maritalStatusList = [{ status: "Married" }, { status: "Un Married" }];
  GenderList = [{ gender: "Male" }, { gender: "Female" }];
  constructor(
    private service: PatientsService,
    private formBuilder: FormBuilder
  ) {
    super();
    this.initForm();
  }

  initForm() {
    this.formdata = this.formBuilder.group({
      Name: [null, [Validators.required]],
      fatherName: [null, [Validators.required]],
      Age: [null, [Validators.required]],
      CNIC_No: [null, [Validators.required]],
      City: [null, [Validators.required]],
      contactNo: [null, [Validators.required]],
      MaritalStatus: [null],
      Gender: [null],
      Address: [null],
    });
  }

  get form() {
    return this.formdata.controls;
  }

  ngOnInit(): void {
    this.getPatientsHistory();
  }

  getById(data) {
    this.updateId = data._id;
    this.formdata.patchValue(data);
    this.formdata.patchValue({
      staffType: data.staffType._id,
    });
  }

  getPatientsHistory() {
    this.isLoading = true;
    this.service.getPatientsHistory().subscribe(
      (resp) => {
        this.isLoading = false;
        this.allPatientsHistoryList = resp;
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
    this.service.savePatients(this.formdata.value).subscribe(
      (resp) => {
        this.loaderOn_Save_Update = false;
        this.SuccessPopup("Successfully added");
        this.getPatientsHistory();
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
    this.service.updatePatients(this.updateId, this.formdata.value).subscribe(
      (resp) => {
        this.SuccessPopup("Data has updated");
        this.clear();
        this.loaderOn_Save_Update = false;
        this.getPatientsHistory();
      },
      (err) => {
        this.errorPopup(err.message);
      }
    );
  }

  deleteStaff(Id) {
    console.log("id for delete : ", Id);
    this.service.deletePatient(Id).subscribe(
      (resp) => {
        this.SuccessPopup("Deleted Successfully");
        console.log("deleted: ", resp);
        this.getPatientsHistory();
      },
      (err) => {
        console.log("err in deleting ", err);
        this.errorPopup(err.message);
      }
    );
  }
}
