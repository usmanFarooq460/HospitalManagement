import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class DepartmentService {
  header = new HttpHeaders({ "Content-Type": "application/json" });
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  saveDepartment(data) {
    return this.http.post<any>(this.apiUrl + "department/addNew", data, {
      headers: this.header,
    });
  }

  getHistoryOfDepartment() {
    return this.http.get<any>(this.apiUrl + "department/getAll", {
      headers: this.header,
    });
  }

  deleteDepartment(id) {
    return this.http.delete<any>(this.apiUrl + "department/delete/" + id, {
      headers: this.header,
    });
  }

  updateDepartment(id, data) {
    return this.http.put<any>(this.apiUrl + "department/update/" + id, data, {
      headers: this.header,
    });
  }

  getyDepartmentById(id) {
    return this.http.get<any>(this.apiUrl + "department/getById/" + id, {
      headers: this.header,
    });
  }
}
