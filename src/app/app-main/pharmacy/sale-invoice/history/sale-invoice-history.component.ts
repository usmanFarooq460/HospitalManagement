import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BaseActions } from "src/app/shared/shared-classes/base-actions";
import { PharmacyService } from "../../pharmacy.service";

@Component({
  selector: "app-sale-invoice-history",
  templateUrl: "./sale-invoice-history.component.html",
  styleUrls: ["./sale-invoice-history.component.scss"],
})
export class SaleInvoiceHistoryComponent extends BaseActions implements OnInit {
  invoiceHistoryList = [];
  selectedInvoiceData: any;
  invoiceDetailDataList = [];
  TotalAmount: number = 0;
  constructor(private service: PharmacyService, private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.isLoading = true;
    this.service.getSAleInvoiceHistory().subscribe(
      (resp) => {
        this.isLoading = false;
        this.invoiceHistoryList = resp;
        console.log("history ", resp);
        this.selectedInvoice(
          this.invoiceHistoryList[this.invoiceHistoryList?.length - 1]
        );
      },
      (err) => {
        this.isLoading = false;
        this.errorPopup("err" + err.message);
      }
    );
  }

  selectedInvoice(selectedItem) {
    this.selectedInvoiceData = selectedItem;
    this.invoiceDetailDataList = selectedItem?.InvoiceDetailList;
    let totalAmount = 0;
    this.invoiceDetailDataList?.map((item) => {
      totalAmount += item.finalAmount;
    });
    for (let i = 0; i < this.invoiceHistoryList?.length; i++) {
      if (this.invoiceHistoryList[i]._id == selectedItem._id)
        this.invoiceHistoryList[i].isSelected = true;
      else this.invoiceHistoryList[i].isSelected = false;
    }
    console.log("selected invoice detail: ", this.invoiceHistoryList);
    this.TotalAmount = totalAmount;
  }

  editInvoice(selectedInvoiceData) {
    this.router.navigate([
      "/pharmacy/sale-invoice-form/" + selectedInvoiceData._id,
    ]);
    // this.router.navigate(["/pharmacy/sale-invoice-form"], {
    //   queryParams: selectedInvoiceData._id,
    // });
  }
}
