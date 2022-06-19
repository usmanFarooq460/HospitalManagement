import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  isLoggedIn: boolean = false;
  loginForm: any;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      userName: ["", Validators.required],
      pasword: ["", Validators.required],
    });
  }
  ngOnInit(): void {
  }

  submit() {
    let pass = "123";
    console.log("Form Fields", this.loginForm);
    console.log("Password Value", this.loginForm.value.pasword);
    if (this.loginForm.value.pasword == pass) {
      var encodedToken = btoa("User has logged in");
      localStorage.setItem("isLoggedIn", encodedToken);
      this.router.navigate(["/"]);
    }
  }
}
