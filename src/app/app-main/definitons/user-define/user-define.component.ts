import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BaseActions } from "src/app/shared/shared-classes/base-actions";

@Component({
  selector: "app-user-define",
  templateUrl: "./user-define.component.html",
  styleUrls: ["./user-define.component.scss"],
})
export class UserDefineComponent extends BaseActions implements OnInit {
  userDefineFormData: any;
  constructor(
    private modalService: NgbModal,
    private Formbuilder: FormBuilder
  ) {
    super();
    this.initForm();
  }

  get form() {
    return this.userDefineFormData.controls;
  }

  initForm() {
    this.userDefineFormData = this.Formbuilder.group({
      userName: [null, [Validators.required]],
      userNameForLogin: [null, [Validators.required]],
      passwordForLogin: [null, [Validators.required]],
      forgotPasswordEmail: [null, [Validators.required]],
      createdAt: [new Date()],
      createdBy: [localStorage.getItem("UserName")],
    });
  }

  ngOnInit(): void {}

  openPopup(userDefineModalContent) {
    this.modalService.open(userDefineModalContent, {
      backdrop: "static",
      keyboard: false,
      size: "lg",
    });
  }

  SaveUser() {
    console.log("form data : ", this.userDefineFormData);
  }
}
