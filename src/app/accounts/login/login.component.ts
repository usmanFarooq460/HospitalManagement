import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AccountsService } from "../accounts.service";
import { extend } from "chartist";
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
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: AccountsService
  ) {
    super();
    this.initForm();
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

  async ngOnInit() {
    await this.getAllUsers();
  }

 async getAllUsers() {
    this.service.getAllUsers().subscribe(
      (resp) => {
        this.allUserslist = resp;
        console.log("all users list : ", resp);
      },
      (err) => {
        this.errorPopup(err.message);
        console.log("error in getting all users: ", err);
      }
    );
  }

  async submit() {
    if (this.loginForm.valid == false) {
      this.loginForm.markAllAsTouched();
      return;
    }
    if (this.loginForm.valid) {
      // temp
      var encodedToken = btoa("User has logged in");
      localStorage.setItem("isLoggedIn", encodedToken);
      this.router.navigate(["/"]);
      console.log("Temporary login");
      // temp
      // await this.getAllUsers()
      if (this.allUserslist?.length > 0 == false) {
        this.WarningPopup("Data base is not Running on live");
        console.log("still runug");
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
            "UserName",
            this.allUserslist[i].userNameForLogin
          );
          localStorage.setItem("UserId", this.allUserslist[i]._id);
          this.router.navigate(["/"]);
        } else {
          this.isMatched = false;
        }
      }
    }
  }
}
