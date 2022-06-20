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
  isLoggedIn: boolean = false;
  loginForm: any;
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
  ngOnInit(): void {
    this.adminGetAll();
  }

  adminGetAll() {
    this.service.getAdmin().subscribe(
      (resp) => {
        console.log("admin resp: ", resp);
      },
      (err) => console.log("err: ", err)
    );
  }

  submit() {
    let username = "admin";
    let pass = "123";
    console.log("Form Fields", this.loginForm);
    console.log("Password Value", this.loginForm.value.pasword);
    if (
      this.loginForm.value.pasword == pass &&
      this.loginForm.value.userName == username
    ) {
      var encodedToken = btoa("User has logged in");
      localStorage.setItem("isLoggedIn", encodedToken);
      this.router.navigate(["/"]);
    }
  }
}
