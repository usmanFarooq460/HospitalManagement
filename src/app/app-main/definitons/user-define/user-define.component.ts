import { Component, OnInit } from "@angular/core";
import { BaseActions } from "src/app/shared/shared-classes/base-actions";

@Component({
  selector: "app-user-define",
  templateUrl: "./user-define.component.html",
  styleUrls: ["./user-define.component.scss"],
})
export class UserDefineComponent extends BaseActions implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}

}
