import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { BaseActions } from "src/app/shared/shared-classes/base-actions";
import { PharmacyService } from "../pharmacy.service";

@Component({
  selector: "app-define-rack",
  templateUrl: "./define-rack.component.html",
  styleUrls: ["./define-rack.component.scss"],
})
export class DefineRackComponent extends BaseActions implements OnInit {
  formData: any;
  updateId: any;
  historyList = [];
  allStoresList = [];
  constructor(
    private service: PharmacyService,
    private formBuilder: FormBuilder
  ) {
    super();
    this.initForm();
  }

  initForm() {
    this.formData = this.formBuilder.group({
      rackName: [null, [Validators.required]],
      storeId: [null, [Validators.required]],
      Description: [null],
      StoreName: [null],
    });
    this.getHistoryStoreName();
  }

  get form() {
    return this.formData.controls;
  }

  ngOnInit(): void {
    this.getAllSotres();
  }

  getById(data) {
    this.updateId = data._id;
    this.loaderOn_Save_Update = false;
    this.formData.patchValue({
      rackName: data.rackName,
      storeId: data.storeId,
      Description: data.Description,
    });
  }

  getAllSotres() {
    this.service.getHistoryStoreName().subscribe(
      (resp) => {
        console.log("All Stores List", resp);
        this.allStoresList = resp;
      },
      (err) => {
        console.log(err);
        this.errorPopup(err.error.errors);
      }
    );
  }

  handleStoreChange(value) {
    let storeName = this.allStoresList.find(
      ({ _id }) => _id == value
    )?.storeName;
    this.formData.value.StoreName = storeName;
  }

  getHistoryStoreName() {
    this.isLoading = true;
    this.service.getHistoryofRacks().subscribe(
      (resp) => {
        this.isLoading = false;
        console.log("History ", resp);
        this.historyList = resp;
      },
      (err) => {
        this.isLoading = false;
        console.log("err " + err);
        this.errorPopup(err.message);
      }
    );
  }

  clear() {
    this.updateId = null;
    this.initForm();
  }

  handleSave_Update() {
    if (this.formData.valid == false) {
      this.formData.markAllAsTouched();
      console.log("not valid :", this.formData.value);
      return;
    }
    let storeName = this.allStoresList.find(
      ({ _id }) => _id == this.formData.value.storeId
    )?.storeName;
    this.formData.value.StoreName = storeName;
    this.updateId == null || this.updateId == undefined
      ? this.save()
      : this.update(this.updateId);
  }

  save() {
    console.log("form data in save method", this.formData.value);
    this.loaderOn_Save_Update = true;
    this.service.saveRack(this.formData.value).subscribe(
      (resp) => {
        this.loaderOn_Save_Update = false;
        this.SuccessPopup("saved SuccesFully");
        this.clear();
      },
      (err) => {
        this.loaderOn_Save_Update = false;
        this.errorPopup(err.message);
        console.log("error in save :", err);
      }
    );
  }

  update(id) {
    this.loaderOn_Save_Update = true;
    this.service.updateRack(this.updateId, this.formData.value).subscribe(
      (resp) => {
        this.loaderOn_Save_Update = false;
        this.SuccessPopup("Updated SuccesFully");
        this.clear();
      },
      (err) => {
        this.loaderOn_Save_Update = false;
        this.errorPopup(err.messaged);
      }
    );
  }

  deleteStoreName(id) {
    this.service.deleteRack(id).subscribe(
      (resp) => {
        this.SuccessPopup("Deleted SuccesFully");
        this.clear();
      },
      (err) => {
        this.errorPopup(err.message);
      }
    );
  }
}
