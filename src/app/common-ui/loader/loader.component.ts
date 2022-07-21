import {
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
  selector: "app-loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.scss"],
})
export class LoaderComponent implements OnInit {
  @ViewChild("LoaderModalContent") LoaderModalContent!: ElementRef;
  @Input() message: string;
  @Input() isLoading: boolean = false;
  @Output() closeLoaderPopup = new EventEmitter();

  poPupContent: any;
  constructor(private ngModal: NgbModal) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    let ngbModalOptions: NgbModalOptions = {
      // backdrop: "static",
      // keyboard: false,
    };
    if (this.isLoading == true) {
      this.poPupContent = this.ngModal.open(
        this.LoaderModalContent,
        ngbModalOptions
      );
    }
    console.log("is loading checking in loader component: ", this.isLoading);
  }

  closePopup() {
    this.poPupContent.close();
    this.closeLoaderPopup.emit("true");
  }
}
