import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { BaseActions } from "src/app/shared/shared-classes/base-actions";
import { DefinitionsService } from "../../definitions.service";

@Component({
  selector: "app-define-screens",
  templateUrl: "./define-screens.component.html",
  styleUrls: ["./define-screens.component.scss"],
})
export class DefineScreensComponent extends BaseActions implements OnInit {
  formdata: any;
  constructor(
    private service: DefinitionsService,
    private formBuilder: FormBuilder
  ) {
    super();
    this.initForm();
  }

  initForm() {
    this.formdata = this.formBuilder.group({
      ModuleName: [null, [Validators.required]],
    });
  }

  get form() {
    return this.formdata.controls;
  }

  ngOnInit(): void {}

  Save() {}
}
