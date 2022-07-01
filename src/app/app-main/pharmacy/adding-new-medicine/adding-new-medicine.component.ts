import { Component, OnInit } from "@angular/core";
import { BaseActions } from "src/app/shared/shared-classes/base-actions";

@Component({
  selector: "app-adding-new-medicine",
  templateUrl: "./adding-new-medicine.component.html",
  styleUrls: ["./adding-new-medicine.component.scss"],
})
export class AddingNewMedicineComponent extends BaseActions implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.SuccessPopup("This is Success Popiup");
    this.WarningPopup("This is warning popip");
    this.errorPopup("this.is error popup");
  }
}
