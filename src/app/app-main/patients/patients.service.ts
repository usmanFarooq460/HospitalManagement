import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class PatientsService {
  header = new HttpHeaders({ "Content-Type": "application/json" });
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  savePatients(data) {
    return this.http.post<any>(this.apiUrl + "addPatients/addNew", data, {
      headers: this.header,
    });
  }

  getPatientsHistory() {
    return this.http.get<any>(this.apiUrl + "addPatients/getAll", {
      headers: this.header,
    });
  }

  updatePatients(id, data) {
    return this.http.put<any>(this.apiUrl + "addPatients/update/" + id, data, {
      headers: this.header,
    });
  }

  deletePatient(id) {
    return this.http.delete<any>(this.apiUrl + "addPatients/delete/" + id, {
      headers: this.header,
    });
  }
}
