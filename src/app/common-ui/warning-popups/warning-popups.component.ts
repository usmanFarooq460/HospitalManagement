import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { NgbModal, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "app-warning-popups",
  templateUrl: "./warning-popups.component.html",
  styleUrls: ["./warning-popups.component.scss"],
})
export class WarningPopupsComponent implements OnInit, AfterViewInit {
  @ViewChild("successModalContent") successModalContent!: ElementRef;
  @Input() Message: string;
  @Input() isConfirmationPopup = false;
  
  @Input() isWarningPopup = false;
  @Input() isSuccessPopup = false;
  @Input() isErrorPopup = false;
  @Output() closePopup = new EventEmitter();

  constructor(private ngModal: NgbModal) {}

  ngOnInit(): void {
    console.log("medium popup: ", this.successModalContent);
  }

  ngAfterViewInit() {
    let ngbModalOptions: NgbModalOptions = {
      backdrop: "static",
      keyboard: false,
    };
    if (this.isConfirmationPopup==false) {
      this.ngModal.open(this.successModalContent, ngbModalOptions);
    }
  }

  okClicked() {
    this.closePopup.emit("ok");
  }
}
