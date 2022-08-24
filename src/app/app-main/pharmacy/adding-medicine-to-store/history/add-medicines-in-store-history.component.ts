import { Component, OnInit } from "@angular/core";
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
  allDrugsHistoryList = [];
  updateId: any;
  searchValue: string;
  constructor(private service: PharmacyService) {
    super();
  }

  ngOnInit(): void {
    this.getAllRecordsOfStore();
  }

  getById(data) {}

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

  HandleSearchChange(value) {
    this.searchValue = value;
    console.log("search value: ", value);
  }
}
