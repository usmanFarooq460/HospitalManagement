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

  onOkClicked(e) {
    console.log("asdfkjadslk");
    
    this.isWarningPopupVisible = false;
    this.isSucessPopupVisible = false;
    this.isErrorPopupVisible = false;
  }
}
