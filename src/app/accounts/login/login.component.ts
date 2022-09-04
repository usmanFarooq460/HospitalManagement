import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AccountsService } from "../accounts.service";
import { BaseActions } from "src/app/shared/shared-classes/base-actions";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent extends BaseActions implements OnInit {
  isLoggedIn: boolean;
  loginForm: any;
  isMatched: boolean = true;
  allUserslist = [];
  existingAdmin = [];
  userlist = [];

  innerHeight: number = 600;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: AccountsService
  ) {
    super();
    this.initForm();
    this.innerHeight = window.innerHeight - 50;
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      userName: ["", Validators.required],
      pasword: ["", Validators.required],
    });
  }

  get form() {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.createACommonListForUsersAndAdmin();
  }

  async getadmin() {
    this.existingAdmin = await this.service.getAdmin().catch((err) => {
      console.log("error in getting admin ", err);
    });
    console.log("admin ", this.existingAdmin);
  }

  async getRegisteredUsers() {
    this.userlist = await this.service
      .getHistoryOfDefinedUsers()
      .catch((err) => {
        console.log("err in getting users", err);
      });

    console.log("user list :", this.userlist);
  }

  async createACommonListForUsersAndAdmin() {
    await this.getadmin();
    await this.getRegisteredUsers();
    this.allUserslist = [];
    this.userlist?.map((item) => {
      this.allUserslist.push(item);
    });
    this.existingAdmin?.map((item) => {
      this.allUserslist.push(item);
    });
    console.log("all users list:", this.allUserslist);
  }

  submit() {
    if (this.loginForm.valid == false) {
      this.loginForm.markAllAsTouched();
      return;
    }
    if (this.loginForm.valid) {
      // // temp
      // var encodedToken = btoa("User has logged in");
      // localStorage.setItem("isLoggedIn", encodedToken);
      // this.router.navigate(["/"]);
      // console.log("Temporary login");
      // // temp
      console.log("all users list : ", this.allUserslist);
      if (this.allUserslist?.length > 0 == false) {
        this.createACommonListForUsersAndAdmin();
        this.WarningPopup("Data base is not Running on live or Register Admin");
        return;
      }
      for (let i = 0; i < this.allUserslist?.length; i++) {
        if (
          this.loginForm.value.userName ==
            this.allUserslist[i].userNameForLogin &&
          this.loginForm.value.pasword == this.allUserslist[i].passwordForLogin
        ) {
          this.isMatched = true;
          var encodedToken = btoa("User has logged in");
          localStorage.setItem("isLoggedIn", encodedToken);
          localStorage.setItem(
            "UserNameForLogin",
            this.allUserslist[i].userNameForLogin
          );
          localStorage.setItem("UserName", this.allUserslist[i].userName);
          localStorage.setItem("UserId", this.allUserslist[i]._id);
          localStorage.setItem("role", this.allUserslist[i].role);
          this.router.navigate(["/"]);
          return;
        } else {
          this.isMatched = false;
        }
      }
    }
  }
}
