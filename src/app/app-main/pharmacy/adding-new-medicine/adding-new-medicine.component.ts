import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { BaseActions } from "src/app/shared/shared-classes/base-actions";
import { PharmacyService } from "../pharmacy.service";

@Component({
  selector: "app-adding-new-medicine",
  templateUrl: "./adding-new-medicine.component.html",
  styleUrls: ["./adding-new-medicine.component.scss"],
})
export class AddingNewMedicineComponent extends BaseActions implements OnInit {
  formData: any;
  drugTypeList = [];
  updateId: any;
  constructor(
    private formBuilder: FormBuilder,
    private service: PharmacyService
  ) {
    super();
    this.initForm();
  }

  ngOnInit(): void {
    this.getallDrugType();
    // this.SuccessPopup("This is Success Popiup");
    // this.WarningPopup("This is warning popip");
    // this.errorPopup("this.is error popup");
  }

  initForm() {
    this.formData = this.formBuilder.group({
      drugName: [null, [Validators.required]],
      drugType: [null, [Validators.required]], //Select box
      drugCode: [null, [Validators.required]],
      drugFormulae: [null, [Validators.required]],
      manufacturingDate: [null, [Validators.required]],
      expiryDate: [null, [Validators.required]],
      batchNo: [null, [Validators.required]],
      retailPrice: [null, [Validators.required]],
      createdBy: [null],
      createdAt: [null],
    });
  }

  get form() {
    return this.formData.controls;
  }

  getallDrugType() {
    this.service.getallDrugTpyes().subscribe(
      (resp) => {
        console.log("ll drug types:", resp);
        this.drugTypeList = resp;
      },
      (err) => {
        this.errorPopup(err.message);
      }
    );
  }

  save() {
    if (this.formData.valid == false) {
      this.formData.markAllAsTouched();
      console.log("not valid :", this.formData.value);
      return;
    }
    console.log("going to dave :", this.formData.value);
    this.service.saveNewDrugOrMedicine(this.formData.value).subscribe(
      (resp) => {
        console.log("saved: ", resp);
        console.log("saved: ", resp);
        this.SuccessPopup("Added Successfully");
        this.clearForm();
      },
      (err) => {
        this.errorPopup(err.message);
      }
    );
  }

  update(updateId) {}

  clearForm() {
    this.updateId = null;
    this.initForm();
  }
}
