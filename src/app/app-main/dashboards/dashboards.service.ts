import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class DashboardsService {
  header = new HttpHeaders({ "Content-Type": "application/json" });
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getExpiredMedicine() {
    return this.http
      .get<any>(this.apiUrl + "add_Record_in_store/getExpiredMedicines", {
        headers: this.header,
      })
      .toPromise();
  }

  getPersistedMedidines() {
    return this.http
      .get<any>(this.apiUrl + "add_Record_in_store/getPersistedMedidines", {
        headers: this.header,
      })
      .toPromise();
  }

  getAllStaffHistory() {
    return this.http.get<any>(this.apiUrl + "addStaff/getAll", {
      headers: this.header,
    });
  }
}
