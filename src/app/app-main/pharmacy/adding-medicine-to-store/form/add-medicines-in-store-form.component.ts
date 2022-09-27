import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
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
  storesList = [];
  RackList = [];
  categoryList = [];
  medicinesList = [];

  constructor(
    private service: PharmacyService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
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
      remarks: [null],
    });
  }

  get form() {
    return this.formData.controls;
  }

  ngOnInit() {
    let paramId = this.activatedRoute.snapshot.queryParams;
    this.updateId = paramId?.Id;
    console.log("update Id:", this.updateId);
    this.getAllStores();
    this.getallMedicineTypes();
    this.getAllMedicines();
    if (this.updateId != undefined && this.updateId != null) {
      this.getDataById(this.updateId);
    } else console.log("its not going to update", this.updateId);
  }

  getDataById(updateId) {
    this.service.getStoreRecordById(updateId).subscribe(
      (resp) => {
        this.PatchValueToTheForm(resp);
      },
      (err) => {
        console.log("err in get by id : ", err);
        this.errorPopup(err);
      }
    );
  }

  PatchValueToTheForm(data) {
    console.log("get by id data : ", data);
    this.getRacksByStore(data?.storeId);
    this.formData.patchValue({
      recordNo: data?.recordNo,
      storeId: data?.storeId,
      rackId: data?.rackId,
      medicineType: data?.medicineType,
      medicineId: data?.medicineId,
      qty: data?.qty,
      size: data?.size,
      remarks: data?.remarks,
    });
  }

  getRacksByStore(storeId) {
    this.service
      .getRackByStore(storeId)
      .then((resp) => {
        this.RackList = resp;
      })
      .catch((err) => this.errorPopup(err.message));
  }

  getAllStores() {
    this.service.getHistoryStoreName().subscribe(
      (resp) => {
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
        this.categoryList = resp;
      },
      (err) => {
        console.log("err in medicine type: ", err);
        this.errorPopup(err.message);
      }
    );
  }

  getAllMedicines() {
    this.service.getAllDrugsHistory().subscribe(
      (resp) => {
        console.log("all medicines: ", resp);
        this.medicinesList = resp;
      },
      (err) => {
        this.errorPopup(err.message);
        console.log("err in getting medicines: ", err);
      }
    );
  }

  handleSelectedMedicine(itemId) {
    let selectedMedicine = this.medicinesList?.find(({ _id }) => itemId == _id);
    console.log("selected medicine: ", selectedMedicine);
    this.formData.patchValue({
      medicineType: selectedMedicine?.drugTypeId,
    });
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
    this.service.SaveAddingDataToStore(this.formData.value).subscribe(
      (resp) => {
        console.log("resp: ", resp);
        this.loaderOn_Save_Update = false;
        this.SuccessPopup("saved SuccesFully");
        this.clear();
      },
      (err) => {
        this.loaderOn_Save_Update = false;
        console.log("err, save : ", err);
        this.errorPopup(err.error.errors);
      }
    );
  }

  update(id) {
    if (this.formData.valid == false) {
      this.formData.markAllAsTouched();
      return;
    }
    this.loaderOn_Save_Update = true;
    this.service
      .updateAddingDataToStore(this.updateId, this.formData.value)
      .subscribe(
        (resp) => {
          this.loaderOn_Save_Update = false;
          this.SuccessPopup("Updated SuccesFully");
          this.clear();
        },
        (err) => {
          this.loaderOn_Save_Update = false;
          console.log("err, save : ", err);
          this.errorPopup(err.error.errors);
        }
      );
  }
}
