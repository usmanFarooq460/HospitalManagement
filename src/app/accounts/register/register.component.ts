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
  ExistingAdmin = [];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: AccountsService
  ) {
    this.initForm()
  }

  initForm(){
    this.registerAdminForm = this.formBuilder.group({
      AdminName: ["", Validators.required],
      phoneNumber: [null],
      Address: "",
      HospitalName: ["", Validators.required],
      userNameForLogin: ["", Validators.required],
      passwordForLogin: ["", Validators.required],
      forgotPasswordEmail: ["", Validators.email],
      createdAt: new Date().toLocaleString(),
    });
  }

  get form() {
    return this.registerAdminForm.controls;
  }

  ngOnInit() {
    this.getExistingAdmin();
  }

  getExistingAdmin() {
    this.service.getExistingAdmin().subscribe(
      (resp) => {
        console.log("Existing Admin", resp);
        this.ExistingAdmin = resp;
      },
      (err) => console.log("error in getting existing admin: ", err)
    );
  }

  registerAdmin() {
    if (this.registerAdminForm.valid == false) {
      this.registerAdminForm.markAllAsTouched();
    }
    if(this.ExistingAdmin?.length>0){
      
    }
    console.log("Form: ", this.registerAdminForm.value);
    this.service.RegisterAdmin(this.registerAdminForm.value).subscribe(
      (resp) => {
        console.log("Submitted Succesfully");
        this.initForm()
      },
      (err) => console.log("Error While Registering admin",err)
    );
  }
}
