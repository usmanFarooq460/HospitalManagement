import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { BaseActions } from "src/app/shared/shared-classes/base-actions";
import { PharmacyService } from "../../pharmacy.service";

@Component({
  selector: "app-add-medicines-in-store-form",
  templateUrl: "./add-medicines-in-store-form.component.html",
  styleUrls: ["./add-medicines-in-store-form.component.scss"],
})
export class AddMedicinesInStoreFormComponent
  extends BaseActions
  implements OnInit
{
  formData: any;
  updateId: any;
  alldrugTypesList = [];
  storesList = [];
  RackList = [];
  categoryList = [];

  constructor(
    private service: PharmacyService,
    private formBuilder: FormBuilder
  ) {
    super();
    this.initForm();
  }

  async initForm() {
    this.formData = this.formBuilder.group({
      recordNo: [null],
      storeId: [null, [Validators.required]],
      rackId: [null, [Validators.required]],
      medicineType: [null, [Validators.required]],
      medicineId: [null, [Validators.required]],
      qty: [null, [Validators.required]],
      size: [null, [Validators.required]],
    });
  }

  get form() {
    return this.formData.controls;
  }

  ngOnInit() {
    this.generateNumber();
    this.getAllStores();
    // this.getAllRacks();
    this.getallMedicineTypes();
  }

  generateNumber() {
    this.service.getHistoryOfStore().subscribe(
      (resp) => {
        console.log("what is going on : ", resp);
        this.formData.value.recordNo = resp?.length + 1;
        console.log("record Number: ", this.formData.value.recordNo);
      },
      (err) => {
        this.errorPopup(err.error.errors);
        console.log("err", err);
      }
    );
    // let allStoredItems = [];
    // allStoredItems = await this.service.getHistoryOfStore().catch((err) => {
    //   console.log("err: ", err);
    //   this.errorPopup(err.error.errors);
    // });
    // console.log("all stored items : ", allStoredItems);
    // this.formData.value.recordNo = allStoredItems?.length + 1;
  }

  getRacksByStore(Id) {
    console.log("id ", Id);
    this.service.getRackByStore(Id).subscribe(
      (resp) => {
        console.log("resp: ", resp);
      },
      (err) => {
        console.log("err", err);
        this.errorPopup(err.message);
      }
    );
  }

  getAllRacks() {
    this.service.getHistoryofRacks().subscribe(
      (resp) => {
        console.log("all racks: ", resp);
        this.RackList = resp;
      },
      (err) => {
        console.log("err");
        this.errorPopup(err.message);
      }
    );
  }

  getAllStores() {
    this.service.getHistoryStoreName().subscribe(
      (resp) => {
        console.log("all stores: ", resp);
        this.storesList = resp;
      },
      (err) => {
        console.log("err");
        this.errorPopup(err.message);
      }
    );
  }

  getallMedicineTypes() {
    this.service.getallDrugTpyes().subscribe(
      (resp) => {
        console.log("all types: ", resp);
        this.categoryList = resp;
      },
      (err) => {
        console.log("err");
        this.errorPopup(err.message);
      }
    );
  }

  getById(data) {
    this.updateId = data._id;
    this.loaderOn_Save_Update = false;
    this.formData.patchValue({
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
    if (this.formData.valid == false) {
      this.formData.markAllAsTouched();
      return;
    }
    console.log("form data ", this.formData.value);
    this.loaderOn_Save_Update = true;
    this.service.saveDrugType(this.formData.value).subscribe(
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
    if (this.formData.valid == false) {
      this.formData.markAllAsTouched();
      return;
    }
    this.loaderOn_Save_Update = true;
    this.service.updateDrugTypes(this.updateId, this.formData.value).subscribe(
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
