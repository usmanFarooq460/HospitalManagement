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

  ngOnInit() {
    this.addHoverOpen_Close();
    this.getUserRightsAgainstUserId();
  }

  getUserRightsAgainstUserId() {
    let userId = localStorage.getItem("UserId");
    console.log("getting rights:", userId);
    this.service.getUserRights(userId)
    .subscribe(
      (resp) => {
        console.log("rights list:", resp);
        this.RightsList = resp?.screenNamesList;
        this.seperateRights(this.RightsList);
      },
      (err) => {
        this.seperateRights(this.RightsList);
        console.log("error in rights list:", err.message);
      }
    );
  }

  seperateRights(rightsList:any) {
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
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("UserName");
    localStorage.removeItem("UserId");
    localStorage.removeItem("role");
    this.router.navigate(["/Accounts/login"]);
  }
}
