import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AccountsService } from "../accounts.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  isLoggedIn: boolean;
  loginForm: any;
  isMatched: boolean = true;
  allUserslist = [];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: AccountsService
  ) {
    this.loginForm = this.formBuilder.group({
      userName: ["", Validators.required],
      pasword: ["", Validators.required],
    });
  }
  get form() {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.service.getAllUsers().subscribe(
      (resp) => {
        this.allUserslist = resp;
        console.log("all users list : ", resp);
      },
      (err) => console.log("error in getting all users: ", err)
    );
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
      if (this.allUserslist?.length>0==false){
        console.log("User list not foud");
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
