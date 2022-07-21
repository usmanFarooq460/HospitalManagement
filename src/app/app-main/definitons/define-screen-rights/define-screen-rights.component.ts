import { Component, OnInit } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { BaseActions } from "src/app/shared/shared-classes/base-actions";
import { DefinitionsService } from "../definitions.service";

@Component({
  selector: "app-define-screen-rights",
  templateUrl: "./define-screen-rights.component.html",
  styleUrls: ["./define-screen-rights.component.scss"],
})
export class DefineScreenRightsComponent extends BaseActions implements OnInit {
  modulesList = [];
  UsersList = [];

  formdata: any;
  constructor(
    private formbuilder: FormBuilder,
    private service: DefinitionsService
  ) {
    super();
    this.initForm();
  }

  loader: boolean = false;
  loadingMessage = "Testing";
  testingLoader() {
    this.loader = !this.loader;
    console.log("is loadding : ", this.loader);
  }

  initForm() {
    this.formdata = this.formbuilder.group({
      users: [null, [Validators.required]],
      screens: [null, [Validators.required]],
      createdAt: [new Date()],
    });
  }

  ngOnInit(): void {
    this.getAllModules();
  }

  getAllModules() {}

  get form() {
    return this.formdata.controls;
  }

  Save() {}
}
