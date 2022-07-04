import { Component, HostListener } from "@angular/core";

@Component({
  template: "",
})
export abstract class BaseActions {
  message: string;
  isSucessPopupVisible: boolean = false;
  isWarningPopupVisible: boolean = false;
  isErrorPopupVisible: boolean = false;

  SuccessPopup(msg) {
    this.message = msg;
    this.isSucessPopupVisible = true;
  }

  WarningPopup(msg) {
    this.message = msg;
    this.isWarningPopupVisible = true;
  }

  errorPopup(msg) {
    this.message = msg;
    this.isErrorPopupVisible = true;
  }

  closeNotification(e) {
    this.isWarningPopupVisible = false;
    this.isSucessPopupVisible = false;
    this.isErrorPopupVisible = false;
  }

  // =========================Popups open and Close============================== ends //

  browserHeight = window.innerHeight;
  browserwidth = window.innerWidth;
  gridHeight = window.innerHeight - 150;
  @HostListener("window:resize", ["$event"])
  onResize(event) {
    event.target.innerWidth;
    let height = event.target.innerHeight;
    let width = event.target.innerWidth;
    this.browserHeight = height;
    this.browserHeight = height - 100;
  }
}
