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
  updateId: any;

  allScreensList = [];
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
    console.log("asdfadsf");
    return this.formdata.controls;
  }

  ngOnInit(): void {
    this.getAllScreens();
  }

  getById(data) {
    this.updateId = data._id;
    this.formdata.patchValue({
      ModuleName: data.ModuleName,
    });
  }

  getAllScreens() {
    this.isLoading = true;
    this.service.getAllScreens().subscribe(
      (resp) => {
        this.isLoading = false;
        this.allScreensList = resp;
        console.log("all screens : ", resp);
      },
      (err) => {
        this.isLoading = false;
        this.errorPopup(err.message);
      }
    );
  }

  clear() {
    this.initForm();
    this.updateId = null;
  }

  Save() {
    if (this.formdata.valid == false) {
      this.formdata.markAllAsTouched();
      return;
    }
    this.loaderOn_Save_Update = true;
    this.service.addNewScreen(this.formdata.value).subscribe(
      (resp) => {
        this.loaderOn_Save_Update = false;
        this.SuccessPopup("Module Successfully added");
        this.initForm();
        this.getAllScreens();
      },
      (err) => {
        this.loaderOn_Save_Update = false;
        this.errorPopup(err.message);
      }
    );
  }

  updateScreen() {
    if (this.formdata.invalid) {
      this.formdata.markAllAsTouched();
      return;
    }
    this.loaderOn_Save_Update = true;
    console.log("updated id", this.updateId);

    this.service.updateScreen(this.updateId, this.formdata.value).subscribe(
      (resp) => {
        console.log("Data has updated: ");
        this.SuccessPopup("Data has updated");
        this.clear();
        this.loaderOn_Save_Update = false;
        this.getAllScreens();
      },
      (err) => {
        this.errorPopup(err.message);
      }
    );
  }

  deleteScreen(id) {
    if (!confirm("Are you sure you want to delete this entity")) return;
    console.log("id", id);
    this.service.deleteScreen(id).subscribe(
      (resp) => {
        console.log("Data has deleted", resp);
        this.SuccessPopup("Screen has Deleted");
        this.getAllScreens();
      },
      (err) => {
        console.log("asdfadf");
        this.errorPopup("error in deleting screen" + err.message);
      }
    );
  }
}
