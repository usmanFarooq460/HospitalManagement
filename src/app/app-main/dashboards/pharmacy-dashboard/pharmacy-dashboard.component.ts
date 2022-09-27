import { Component, OnInit } from "@angular/core";
import { DashboardsService } from "../dashboards.service";

@Component({
  selector: "app-pharmacy-dashboard",
  templateUrl: "./pharmacy-dashboard.component.html",
  styleUrls: ["./pharmacy-dashboard.component.scss"],
})
export class PharmacyDashboardComponent implements OnInit {
  constructor(private service: DashboardsService) {}
  expiredMedicines = [];
  persistedMedicines = [];
  totalMedicines = [];
  totalRetailPrice: number = 0;
  expiredMedicineRetailPrice: number = 0;
  persistedMedicineRetailPrice: number = 0;
  async ngOnInit() {
    await this.getExpiredMedicine();
    await this.getPersistedMedidines();
    this.calculatingTotalPrice();
  }

  calculatingTotalPrice() {
    console.log("all medicines list: ", this.totalMedicines);
    for (let i = 0; i < this.totalMedicines.length; i++) {
      this.totalRetailPrice =
        this.totalRetailPrice + this.totalMedicines[i].medicineId.retailPrice;
    }
  }

  async getExpiredMedicine() {
    this.expiredMedicines = await this.service.getExpiredMedicine();
    this.expiredMedicines.map((item) => {
      this.totalMedicines.push(item);
      this.expiredMedicineRetailPrice += item.medicineId.retailPrice;
    });
    console.log("expired medicine: ", this.expiredMedicines);
  }

  async getPersistedMedidines() {
    this.persistedMedicines = await this.service.getPersistedMedidines();
    this.persistedMedicines.map((item) => {
      this.totalMedicines.push(item);
      this.persistedMedicineRetailPrice += item.medicineId.retailPrice;
    });
    console.log("persisted medicines: ", this.persistedMedicines);
  }
}
