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

  updateDrugTypes(id, body) {
    return this.http.put<any>(this.apiUrl + "def-drugType/update/" + id, body, {
      headers: this.header,
    });
  }

  deleteDrugTypes(id) {
    return this.http.delete<any>(this.apiUrl + "def-drugType/delete/" + id, {
      headers: this.header,
    });
  }

  // Defining Drug Tpye List
  saveNewDrugOrMedicine(data) {
    return this.http.post<any>(this.apiUrl + "def_drug/addNew", data, {
      headers: this.header,
    });
  }

  getAllDrugsHistory() {
    return this.http.get<any>(this.apiUrl + "def_drug/getAll", {
      headers: this.header,
    });
  }

  updateDrug(id, data) {
    return this.http.put<any>(this.apiUrl + "def_drug/update/" + id, data, {
      headers: this.header,
    });
  }

  deleteDrug(id) {
    return this.http.delete<any>(this.apiUrl + "def_drug/delete/" + id, {
      headers: this.header,
    });
  }
}
