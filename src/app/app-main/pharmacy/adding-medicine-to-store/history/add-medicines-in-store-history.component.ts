import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BaseActions } from "src/app/shared/shared-classes/base-actions";
import { PharmacyService } from "../../pharmacy.service";

@Component({
  selector: "app-add-medicines-in-store-history",
  templateUrl: "./add-medicines-in-store-history.component.html",
  styleUrls: ["./add-medicines-in-store-history.component.scss"],
})
export class AddMedicinesInStoreHistoryComponent
  extends BaseActions
  implements OnInit
{
  storeRecordList = [];
  updateId: any;
  constructor(private service: PharmacyService, private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.getAllRecordsOfStore();
  }

  getById(data) {
    this.router.navigate(["/pharmacy/add-item-in-store-form"], {
      queryParams: { Id: data._id },
    });
  }

  getAllRecordsOfStore() {
    this.service.getHistoryOfStore().subscribe(
      (resp) => {
        console.log("all stores record: ", resp);
        this.storeRecordList = resp;
      },
      (err) => {
        this.errorPopup(err.message);
        console.log("err in getting medicines: ", err);
      }
    );
  }

  deleteStore(Id) {}
}
