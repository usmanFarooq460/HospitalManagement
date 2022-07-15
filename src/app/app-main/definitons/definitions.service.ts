import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class DefinitionsService {
  header = new HttpHeaders({ "Content-Type": "application/json" });
  ApiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  Save(data) {
    return this.http.post<any>(this.ApiUrl + "user/AddNew", data, {
      headers: this.header,
    });
  }

  getAllUsersExceptAdmin() {
    return this.http.get<any>(this.ApiUrl + "allUsers/getAll", {
      headers: this.header,
    });
  }
}
