import { Component, OnInit } from "@angular/core";
import { DashboardsService } from "../dashboards.service";

@Component({
  selector: "app-staff-salary-dashboard",
  templateUrl: "./staff-salary-dashboard.component.html",
  styleUrls: ["./staff-salary-dashboard.component.scss"],
})
export class StaffSalaryDashboardComponent implements OnInit {
  allStaffList = [];
  sumOfAllStaffSalaries: number = 0;
  constructor(private service: DashboardsService) {}

  ngOnInit(): void {
    this.getAllstaff();
  }

  getAllstaff() {
    this.service.getAllStaffHistory().subscribe(
      (resp) => {
        console.log("staff history: ", resp);
        this.allStaffList = resp;
        for (let i = 0; i < this.allStaffList.length; i++) {
          this.sumOfAllStaffSalaries += this.allStaffList[i].Salary;
        }
      },
      (err) => console.log("err in getting staff history: ", err)
    );
  }
}
