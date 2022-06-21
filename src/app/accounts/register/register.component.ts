import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AccountsService } from "../accounts.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  registerAdminForm: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: AccountsService
  ) {
    this.registerAdminForm = this.formBuilder.group({
      AdminName: ["", Validators.required],
      phoneNumber: null,
      Address: "",
      HospitalName: ["", Validators.required],
      userNameForLogin: ["", Validators.required],
      passwordForLogin: ["", Validators.required],
      forgotPasswordEmail: ["", Validators.email],
      createdAt: new Date(),
    });
  }

  ngOnInit() {}

  registerAdmin() {
    
  }
}
