import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { SharedService } from "../shared.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  uiBasicCollapsed = false;
  samplePagesCollapsed = false;
  PharmacyCollapsed = false;
  Definitions = false;
  RightsList = [];

  AllModules = [
    { id: 0, name: "Pharmacy", right: false },
    { id: 1, name: "Definitions", right: false },
    { id: 2, name: "Dashboard", right: false },
    { id: 3, name: "Icons", right: false },
    { id: 4, name: "Basic Ui Elements", right: false },
  ];

  constructor(private router: Router, private service: SharedService) {}

  rightsListByUser = [];
  async ngOnInit() {
    await this.getUserRightsAgainstUserId();
    // this.seperateRights(this.rightsListByUser);
  }

  async getUserRightsAgainstUserId() {
    let userId = localStorage.getItem("UserId");
    console.log("getting rights:", userId);
    this.service
      .getUserRights(userId)
      .then((resp) => {
        console.log("Got User Rights : ", resp);
        this.rightsListByUser = resp?.screenNamesList;
        this.seperateRights(this.rightsListByUser);
      })
      .catch((err) => {
        this.seperateRights(this.rightsListByUser);
        console.log("err in getting rights by user: ", err);
      });
  }

  seperateRights(rightsList: any) {
    console.log("rights list: ", rightsList);
    for (let i = 0; i < rightsList.length; i++) {
      const element = rightsList[i];
      for (let j = 0; j < this.AllModules.length; j++) {
        if (this.AllModules[j].name == rightsList[i].name) {
          this.AllModules[j].right = true;
        }
      }
    }
    console.log("rights list:", this.AllModules);
    let role = localStorage.getItem("role");
    console.log("role : ", role);
    if (role == "Admin") {
      console.log("inside the condition");
      for (let i = 0; i < this.AllModules.length; i++) {
        this.AllModules[i].right = true;
      }
    }
    this.addHoverOpen_Close();
  }

  addHoverOpen_Close() {
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector("body");
    document.querySelectorAll(".sidebar .nav-item").forEach(function (el) {
      el.addEventListener("mouseover", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.add("hover-open");
        }
      });
      el.addEventListener("mouseout", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.remove("hover-open");
        }
      });
    });
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(["/Accounts/login"]);
  }
}
