import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class SharedService {
  header = new HttpHeaders({ "Content-Type": "application/json" });
  ApiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getUserRights(Id) {
    return this.http.get<any>(
      this.ApiUrl + "screens-rights/getRightsByUserId/" + Id,
      {
        headers: this.header,
      }
    );
  }
}
