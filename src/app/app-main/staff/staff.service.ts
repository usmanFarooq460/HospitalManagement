import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class StaffService {
  header = new HttpHeaders({ "Content-Type": "application/json" });
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  // **************************** Staff Type *************************
  saveStaffType(data) {
    return this.http.post<any>(this.apiUrl + "staffType/addNew", data, {
      headers: this.header,
    });
  }

  getAllStaffTypeHistory() {
    return this.http.get<any>(this.apiUrl + "staffType/getAll", {
      headers: this.header,
    });
  }

  updateStaffType(id, data) {
    return this.http.put<any>(this.apiUrl + "staffType/update/" + id, data, {
      headers: this.header,
    });
  }

  // **************************** Staff *************************

  saveStaff(data) {
    return this.http.post<any>(this.apiUrl + "addStaff/addNew", data, {
      headers: this.header,
    });
  }

  getStaffHistory() {
    return this.http.get<any>(this.apiUrl + "addStaff/getAll", {
      headers: this.header,
    });
  }

  updateStaff(id, data) {
    return this.http.put<any>(this.apiUrl + "addStaff/update/" + id, data, {
      headers: this.header,
    });
  }

  deleteStaff(id) {
    return this.http.delete<any>(this.apiUrl + "addStaff/delete/" + id, {
      headers: this.header,
    });
  }
}
