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
  isMatched: boolean = false;
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
  get form() { return this.loginForm.controls; }
  
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
      return
    }
    if (this.loginForm.valid) {
      console.log("Form Fields", this.loginForm);
      console.log("Password Value", this.loginForm.value.pasword);
      for (let i = 0; i < this.allUserslist?.length; i++) {
        if (
          this.loginForm.value.userName == this.allUserslist[i].userNameForLogin &&
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
          console.log(this.allUserslist[i].userNameForLogin,this.allUserslist[i].passwordForLogin);
          console.log(this.loginForm.value.userName,this.loginForm.value.pasword);
          
          this.isMatched = false;
        }
      }
    }
  }
}
