import { formatDate } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { BaseActions } from "src/app/shared/shared-classes/base-actions";
import { PharmacyService } from "./../../pharmacy.service";

@Component({
  selector: "app-sale-invoice-form",
  templateUrl: "./sale-invoice-form.component.html",
  styleUrls: ["./sale-invoice-form.component.scss"],
})
export class SaleInvoiceFormComponent extends BaseActions implements OnInit {
  formData: any;
  detailFormData: any;
  DoctorsList = [];
  patientsList = [];
  medicinesList = [];
  storeNameList = [];
  medicineTypesList = [];
  updateId = null;
  discountTypesList = [{ label: "Flat" }, { label: "Percent" }];
  detailList = [];
  maxValueForInvoiceQty: number = 1;
  detailEditMode: boolean = false;
  updateRowIndex: number = -1;
  qtyInGetById: number;
  constructor(
    private fb: FormBuilder,
    private service: PharmacyService,
    private activatedRoute: ActivatedRoute
  ) {
    super();
    this.headerInitForm();
    this.detailInitForm();
  }

  headerInitForm() {
    this.formData = this.fb.group({
      InvoiceNo: [null, [Validators.required]],
      invoiceDate: [
        formatDate(new Date(), "yyyy-MM-dd", "en"),
        [Validators.required],
      ],
      prescribedBy: [null], //select box
      patient: [null], // select box
      headerRemarks: [null], // text area
      InvoiceDetailList: [this.fb.array],
    });
  }
  detailInitForm() {
    this.detailFormData = this.fb.group({
      store: [null, [Validators.required]], //select box
      Medicine: [null, [Validators.required]], //select box
      MfgDate: [null, [Validators.required]],
      expDate: [null, [Validators.required]],
      packSize: [null, [Validators.required]],
      medicinetype: new FormControl(
        { value: null, disabled: true },
        Validators.required
      ),
      batchNo: [null, [Validators.required]],
      Qty: [null, [Validators.required]],
      rate: [null, [Validators.required]],
      discountType: [null], // select box
      discount: [null], // number box
      finalAmount: [null, [Validators.required]], // number box
      remarks: [null], // text area
      storeName: [null],
      MedicineName: [null],
      MedicineTypeName: [null],
      storeRecordId: [null],
      previousQtyInUpdateCase: [null],
    });
  }

  get form() {
    return this.formData.controls;
  }

  get detF() {
    return this.detailFormData.controls;
  }

  ngOnInit(): void {
    let paramId = this.activatedRoute.snapshot.params;
    console.log("updated id : ", paramId?.id);
    this.updateId = paramId?.id;
    this.getAllStores();
    this.getAllMedicinesTypes();
    if (this.updateId) this.getById(this.updateId);
  }

  getById(updateId) {
    this.service.getSaleInvoiceById(updateId).subscribe(
      (resp) => {
        console.log("get by id resp: ", resp);
        this.formData.patchValue(resp);
        this.detailList = resp?.InvoiceDetailList;
        if (this.detailList?.length > 0) {
          this.getMedicinesOnStoreChange(this.detailList[0].store);
          // this.getMedicineDetailOnMedicineChange(this.detailList[0].Medicine);
          this.editDetailRecordRow(this.detailList[0], 0);
        }
      },
      (err) => {
        console.log("err in get by id : ", err);
        this.errorPopup(err.message);
      }
    );
  }

  getAllStores() {
    this.service.getHistoryStoreName().subscribe(
      (resp) => {
        this.storeNameList = resp;
      },
      (err) => this.errorPopup(err.message)
    );
  }

  getAllMedicinesTypes() {
    this.service.getallDrugTpyes().subscribe(
      (resp) => {
        console.log("all drug types: ", resp);
        this.medicineTypesList = resp;
      },
      (err) => this.errorPopup(err.message)
    );
  }

  getMedicinesOnStoreChange(storeId) {
    if (storeId != undefined && storeId != null) {
      let storeName = this.storeNameList.find(
        ({ _id }) => _id == storeId
      )?.storeName;
      this.detailFormData.patchValue({
        storeName: storeName,
      });
      this.service.getStoreMedicineByStoreId(storeId).subscribe(
        (resp: Array<any>) => {
          this.medicinesList = [];
          for (let i = 0; i < resp?.length; i++) {
            this.medicinesList.push(resp[i].medicineId);
            this.medicinesList[i]["Qty"] = resp[i].qty;
            this.medicinesList[i]["Id"] = resp[i]._id;
            this.medicinesList[i]["packSize"] = resp[i].size;
          }
        },
        (err) => this.errorPopup(err.message)
      );
    }
  }

  getMedicineDetailOnMedicineChange(MedicineId) {
    if (MedicineId === null || MedicineId === undefined) {
      this.detailFormData?.patchValue({
        MfgDate: null,
        expDate: null,
        packSize: null,
        medicinetype: null,
        batchNo: null,
        Qty: null,
        rate: null,
      });
      this.maxValueForInvoiceQty = 1;
    } else {
      let selectedMedicineDetail = this.medicinesList.find(
        ({ Id }) => Id == MedicineId
      );
      console.log("selected medicine detail: ", selectedMedicineDetail);
      this.detailFormData?.patchValue({
        MfgDate: formatDate(
          selectedMedicineDetail.manufacturingDate,
          "yyyy-MM-dd",
          "en"
        ),
        expDate: formatDate(
          selectedMedicineDetail.expiryDate,
          "yyyy-MM-dd",
          "en"
        ),
        packSize: selectedMedicineDetail.packSize,
        medicinetype: selectedMedicineDetail.drugTypeId,
        batchNo: selectedMedicineDetail.batchNo,
        Qty: selectedMedicineDetail.Qty,
        rate: selectedMedicineDetail.retailPrice,
        MedicineName: selectedMedicineDetail.drugName,
        MedicineTypeName: selectedMedicineDetail.drugTypeName,
        storeRecordId: selectedMedicineDetail.Id,
      });
      this.maxValueForInvoiceQty = selectedMedicineDetail.Qty;
      console.log("selcted medicine detail ", this.detailFormData.value);
    }
    this.handleCalculation();
  }
  //#endregion

  //#region Calculation
  handleCalculation() {
    let finalAmount: number;
    let DiscountedAmount: number;
    let qty: number =
      this.detailFormData.value.Qty > 0 ? this.detailFormData.value.Qty : 0;
    let rate: number =
      this.detailFormData.value.rate > 0 ? this.detailFormData.value.rate : 0;
    finalAmount = rate * qty;
    let discountType = this.detailFormData.value.discountType;
    let discount =
      this.detailFormData.value.discount > 0
        ? this.detailFormData.value.discount
        : 0;
    if (discountType == null || discountType == undefined) {
      this.detailFormData.patchValue({
        discount: 0,
      });
    } else if (discountType == "Flat") {
      finalAmount = finalAmount - discount;
    } else if (discountType == "Percent") {
      DiscountedAmount = (finalAmount / 100) * discount;
      finalAmount = finalAmount - DiscountedAmount;
    }
    this.detailFormData.patchValue({
      finalAmount: finalAmount,
    });
  }
  //#endregion

  addDetailRecord2Grid() {
    if (this.detailFormData.valid == false) {
      this.detailFormData.markAllAsTouched();
      console.log("its not valid");
      return;
    }
    if (this.updateId == undefined || this.updateId == null) {
      this.detailFormData.patchValue({
        previousQtyInUpdateCase: this.detailFormData.value.Qty,
      });
    }
    if (this.detailEditMode == true) {
      this.detailList[this.updateRowIndex] = this.detailFormData.value;
      this.updateRowIndex = -1;
      this.detailEditMode = false;
    } else {
      this.detailList.push(this.detailFormData.value);
    }
    this.detailInitForm();
  }

  deleteDetailRecordRow(index) {
    this.detailList.splice(index, 1);
  }

  cancelEditMode() {
    this.detailEditMode = true;
    this.detailEditMode = false;
    this.updateRowIndex = -1;
    this.detailInitForm();
  }

  editDetailRecordRow(editObject, index) {
    this.detailEditMode = true;
    this.updateRowIndex = index;
    this.detailFormData.patchValue(editObject);
  }

  clear() {
    this.headerInitForm();
    this.detailInitForm();
    this.updateId = null;
    this.detailList = [];
    this.medicinesList = [];
    this.detailEditMode = false;
    this.updateRowIndex = -1;
  }

  isThereAnyError() {
    if (this.detailList?.length > 0 == false) {
      this.WarningPopup("Please Add Detail Record To Proceed");
      return true;
    }
    return false;
  }

  handleSave_Update() {
    if (this.formData.valid == false) {
      this.formData.markAllAsTouched();
      return;
    }
    console.log("form data : ", this.formData.value);
    if (this.isThereAnyError()) return;
    let finalObject = {
      InvoiceNo: this.formData.value.InvoiceNo,
      invoiceDate: this.formData.value.invoiceDate,
      prescribedBy: this.formData.value.prescribedBy,
      patient: this.formData.value.patient,
      createdBy: localStorage.getItem("UserId"),
      createdAt: new Date(),
      headerRemarks: this.formData.value.headerRemarks,
      InvoiceDetailList: this.detailList,
    };

    console.log("going to save Update: ", finalObject);
    this.updateId == null || this.updateId == undefined
      ? this.save(finalObject)
      : this.update(this.updateId, finalObject);
  }
  save(data) {
    this.detailFormData.value;
    this.service.saveSAleInvoice(data).subscribe(
      (resp) => {
        console.log("saved successfuly");
        this.SuccessPopup("Saved Successfully");
        this.clear();
      },
      (err) => {
        console.log("err in saving sale Invoice: ", err);
        this.errorPopup(err.message);
      }
    );
  }
  update(Id, data) {
    console.log("going to update", data);
    this.service.updateSaleInvoice(Id, data).subscribe(
      (resp) => {
        console.log("updated ");
        this.SuccessPopup("Updated Successfully");
        this.clear();
      },
      (err) => {
        this.errorPopup(err.message);
        console.log("error in updating sale invoice: ", err);
      }
    );
  }
}
