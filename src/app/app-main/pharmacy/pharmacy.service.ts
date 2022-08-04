import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class PharmacyService {
  header = new HttpHeaders({ "Content-Type": "application/json" });
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  saveDrugType(data) {
    return this.http.post<any>(this.apiUrl + "def-drugType/AddNew", data, {
      headers: this.header,
    });
  }
  getallDrugTpyes() {
    return this.http.get<any>(this.apiUrl + "def-drugType/getAll", {
      headers: this.header,
    });
  }
}
