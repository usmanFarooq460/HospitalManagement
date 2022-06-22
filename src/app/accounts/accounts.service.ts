import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AccountsService {
  header = new HttpHeaders({ "Content-Type": "application/json" });
  ApiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<any>(this.ApiUrl + "allUsers/getAll", {
      headers: this.header,
    });
  }

  //*************************** Register Component **********************************/
  RegisterAdmin(data) {
    return this.http.post<any>(this.ApiUrl + "admin/AddNew", data, {
      headers: this.header,
    });
  }
  getExistingAdmin() {
    return this.http.get<any>(this.ApiUrl + "admin/getAll", {
      headers: this.header,
    });
  }
}
