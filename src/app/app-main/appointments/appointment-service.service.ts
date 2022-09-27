import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AppointmentServiceService {
  header = new HttpHeaders({ "Content-Type": "application/json" });
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  saveAppointment(data) {
    return this.http.post<any>(this.apiUrl + "appointment/addNew", data, {
      headers: this.header,
    });
  }

  getAppointmentHistory() {
    return this.http.get<any>(this.apiUrl + "appointment/getAll", {
      headers: this.header,
    });
  }

  updateAppointment(id, data) {
    return this.http.put<any>(this.apiUrl + "appointment/update/" + id, data, {
      headers: this.header,
    });
  }

  getPatientsHistory() {
    return this.http.get<any>(this.apiUrl + "addPatients/getAll", {
      headers: this.header,
    });
  }

  deleteAppointment(id) {
    return this.http.delete<any>(this.apiUrl + "appointment/delete/" + id, {
      headers: this.header,
    });
  }

  getHistoryOfDepartment() {
    return this.http.get<any>(this.apiUrl + "department/getAll", {
      headers: this.header,
    });
  }
}
