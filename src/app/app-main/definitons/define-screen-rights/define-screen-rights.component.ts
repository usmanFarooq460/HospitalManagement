import { isNgTemplate } from "@angular/compiler";
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
  rightsId: string;
  formdata: any;
  constructor(
    private formbuilder: FormBuilder,
    private service: DefinitionsService
  ) {
    super();
    this.initForm();
  }

  initForm() {
    this.formdata = this.formbuilder.group({
      users: ["null", [Validators.required]],
    });
  }

  get form() {
    return this.formdata.controls;
  }

  ngOnInit(): void {
    this.getAllModules();
    this.getAllUser();
  }

  getAllModules() {
    this.service.getAllScreens().subscribe(
      (resp) => {
        this.modulesList = [];
        for (let i = 0; i < resp?.length; i++) {
          this.modulesList.push({
            isSelected: false,
            Id: resp[i]._id,
            name: resp[i].ModuleName,
          });
        }
      },
      (err) => {
        this.errorPopup(err.message);
      }
    );
  }

  getAllUser() {
    this.service.getHistoryOfDefinedUsers().subscribe(
      (resp) => {
        this.UsersList = resp;
        console.log("all users,", resp);
      },
      (err) => {
        this.errorPopup(err.message);
      }
    );
  }

  getSelectedModule(id) {
    for (let i = 0; i <= this.modulesList.length; i++) {
      if (this.modulesList[i]?.Id == id) {
        this.modulesList[i].isSelected = !this.modulesList[i].isSelected;
      }
    }
  }

  saveOrUpdte(idforupdate?) {
    if (
      this.formdata.value.users == undefined ||
      this.formdata.value.users == null
    ) {
      this.WarningPopup("please select user");
      return;
    }
    let selectedModuleNames = [];
    for (let item of this.modulesList) {
      if (item.isSelected) {
        selectedModuleNames.push({
          Id: item.Id,
          name: item.name,
        });
      }
    }
    if (selectedModuleNames?.length > 0 == false) {
      this.WarningPopup("Please Select modules for right");
      return;
    }
    let finalDataToSend = {
      screenNamesList: selectedModuleNames,
      userId: this.formdata.value.users,
      userName: this.UsersList.find(
        (item) => item._id == this.formdata.value.users
      ).userName,
    };
    console.log("final data to send: ", finalDataToSend);
    if (idforupdate == undefined || idforupdate == null) {
      this.SaveRights(finalDataToSend);
    } else {
      this.updateDefineScreenRights(idforupdate, finalDataToSend);
    }
  }

  SaveRights(dataToSubmit) {
    this.service.saveScreenRights(dataToSubmit).subscribe(
      (resp) => {
        console.log("saved", resp);
        this.SuccessPopup("saved successfully");
        this.clearData();
      },
      (err) => {
        this.errorPopup(err.message);
        console.log("Why its not working for second users: ", err);
      }
    );
  }

  getRightsByUserId(event) {
    let userId = event.target.value;
    if (userId == "null") {
      return;
    }
    this.service.getScreenRightsByUserId(userId).subscribe(
      (resp) => {
        if (resp?.screenNamesList?.length > 0) {
          this.rightsId = resp._id;
          for (let i = 0; i < this.modulesList.length; i++) {
            this.modulesList[i].isSelected = false;
          }
        } else {
          this.rightsId = undefined;
          for (let i = 0; i < this.modulesList.length; i++) {
            this.modulesList[i].isSelected = false;
          }
        }
        let rightedScreens = resp?.screenNamesList;
        for (let i = 0; i < this.modulesList.length; i++) {
          for (let j = 0; j < rightedScreens?.length; j++) {
            if (rightedScreens[j].Id == this.modulesList[i].Id) {
              this.modulesList[i].isSelected = true;
            }
          }
        }
      },
      (err) => this.errorPopup(err.message)
    );
  }

  updateDefineScreenRights(Id, data) {
    console.log("id :", Id, "dsts", data);
    this.service.updateScreenRights(Id, data).subscribe(
      (resp) => {
        this.SuccessPopup("Updated successfully");
        this.clearData();
      },
      (err) => {
        this.errorPopup("error in update" + err.message);
      }
    );
  }

  clearData() {
    this.initForm();
    for (let i = 0; i < this.modulesList.length; i++) {
      this.modulesList[i].isSelected = false;
    }
  }
}
