import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { BaseActions } from "src/app/shared/shared-classes/base-actions";
import { PharmacyService } from "../../pharmacy.service";

@Component({
  selector: "app-def-drug-type",
  templateUrl: "./def-drug-type.component.html",
  styleUrls: ["./def-drug-type.component.scss"],
})
export class DefDrugTypeComponent extends BaseActions implements OnInit {
  formdata: any;
  updateId: any;
  alldrugTypesList = [];

  constructor(
    private service: PharmacyService,
    private formBuilder: FormBuilder
  ) {
    super();
    this.initForm();
  }

  initForm() {
    this.formdata = this.formBuilder.group({
      drugType: [null, [Validators.required]],
    });
  }

  get form() {
    return this.formdata.controls;
  }

  ngOnInit(): void {
    this.getAllDrugType();
  }

  getById(data) {
    this.updateId = data._id;
    this.loaderOn_Save_Update = false;
    this.formdata.patchValue({
      drugType: data.drugType,
    });
  }

  getAllDrugType() {
    this.isLoading = true;
    this.service.getallDrugTpyes().subscribe(
      (resp) => {
        this.isLoading = false;
        console.log("all dtug type ", resp);
        this.alldrugTypesList = resp;
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

  save() {
    if (this.formdata.valid == false) {
      this.formdata.markAllAsTouched();
      return;
    }
    console.log("form data ", this.formdata.value);
    this.loaderOn_Save_Update = true;
    this.service.saveDrugType(this.formdata.value).subscribe(
      (resp) => {
        this.getAllDrugType();
        this.loaderOn_Save_Update = false;
        this.SuccessPopup("saved SuccesFully");
        this.clear();
      },
      (err) => {
        this.loaderOn_Save_Update = false;
        this.errorPopup(err.message);
      }
    );
  }

  update(id) {
    if (this.formdata.valid == false) {
      this.formdata.markAllAsTouched();
      return;
    }
    this.loaderOn_Save_Update = true;
    this.service.updateDrugTypes(this.updateId, this.formdata.value).subscribe(
      (resp) => {
        this.loaderOn_Save_Update = false;
        this.getAllDrugType();
        this.SuccessPopup("Updated SuccesFully");
        this.clear();
      },
      (err) => {
        this.loaderOn_Save_Update = false;
        this.errorPopup(err.messaged);
      }
    );
  }

  deleteScreen(id) {
    this.service.deleteDrugTypes(id).subscribe(
      (resp) => {
        this.getAllDrugType();
        this.SuccessPopup("Deleted SuccesFully");
        this.clear();
      },
      (err) => {
        this.errorPopup(err.message);
      }
    );
  }
}
