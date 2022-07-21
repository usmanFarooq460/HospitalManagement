import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BaseActions } from "src/app/shared/shared-classes/base-actions";
import { DefinitionsService } from "../definitions.service";

@Component({
  selector: "app-user-define",
  templateUrl: "./user-define.component.html",
  styleUrls: ["./user-define.component.scss"],
})
export class UserDefineComponent extends BaseActions implements OnInit {
  allUserslist = [];
  userDefineFormData: any;
  modalReference: any;
  idforupdate: string = "null";
  userModalContent: any;
  constructor(
    private modalService: NgbModal,
    private Formbuilder: FormBuilder,
    private service: DefinitionsService
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
      CNIC_No: [null, [Validators.required]],
      createdAt: [new Date()],
      createdBy: [localStorage.getItem("UserName")],
    });
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getById(id, content) {
    this.idforupdate = id;
    this.service.getById(id).subscribe(
      (resp) => {
        console.log("get by id : ", resp);
        this.openPopup(content);
        this.userDefineFormData.patchValue({
          CNIC_No: resp.CNIC_No,
          createdAt: resp.createdAt,
          createdBy: resp.createdBy,
          passwordForLogin: resp.passwordForLogin,
          userName: resp.userName,
          userNameForLogin: resp.userNameForLogin,
        });
      },
      (err) => {
        console.log("error in get by id: ", err);
        this.errorPopup(err);
      }
    );
  }

  openPopup(userDefineModalContent) {
    this.userModalContent = userDefineModalContent;
    console.log("id for Updte: ", this.idforupdate);
    if ((this.idforupdate = null)) {
      this.initForm();
    }
    this.modalReference = this.modalService.open(userDefineModalContent, {
      backdrop: "static",
      keyboard: false,
      size: "lg",
    });
  }


  
  getAllUsers() {
    this.service.getHistoryOfDefinedUsers().subscribe(
      (resp) => {
        console.log("All Users List: ", resp);
        resp.filter(({ role }) => role == "");
        this.allUserslist = resp;
      },
      (err) => {
        this.errorPopup(err.message);
        console.log("err in getting all users: ", err);
      }
    );
  }

  SaveUser() {
    if (this.userDefineFormData.valid == false) {
      this.userDefineFormData.markAllAsTouched();
      return;
    }
    console.log("form data : ", this.userDefineFormData.value);
    this.service.Save(this.userDefineFormData.value).subscribe(
      (resp) => {
        console.log("submitted : ", resp);
        this.SuccessPopup("User SuccessFully Created");
        this.getAllUsers();
        this.initForm();
        this.modalReference.close();
      },
      (err) => {
        console.log("error : ", err);
        this.errorPopup(err.message);
      }
    );
  }
}
