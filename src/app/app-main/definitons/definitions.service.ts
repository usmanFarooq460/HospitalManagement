import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { post } from "jquery";
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

  getHistoryOfDefinedUsers() {
    return this.http.get<any>(this.ApiUrl + "user/getAll", {
      headers: this.header,
    });
  }

  getById(id) {
    return this.http.get<any>(this.ApiUrl + "user/getById/" + id, {
      headers: this.header,
    });
  }

  updateUser(id, body) {
    return this.http.put<any>(this.ApiUrl + "user/update/" + id, body, {
      headers: this.header,
    });
  }

  deleteUser(id) {
    return this.http.delete<any>(this.ApiUrl + "user/delete/" + id, {
      headers: this.header,
    });
  }

  //#region Screen
  addNewScreen(data) {
    return this.http.post<any>(this.ApiUrl + "screens/AddNew", data, {
      headers: this.header,
    });
  }

  getAllScreens() {
    return this.http.get<any>(this.ApiUrl + "screens/getAll", {
      headers: this.header,
    });
  }

  updateScreen(id, data) {
    return this.http.put<any>(this.ApiUrl + "screens/update/" + id, data, {
      headers: this.header,
    });
  }

  deleteScreen(id) {
    return this.http.delete<any>(this.ApiUrl + "screens/delete/" + id, {
      headers: this.header,
    });
  }
  //#endregion

  //#region Screen Rights

  saveScreenRights(data) {
    return this.http.post<any>(this.ApiUrl + "screens-rights/addNew", data, {
      headers: this.header,
    });
  }

  getScreenRightsByUserId(userId) {
    return this.http.get<any>(
      this.ApiUrl + "screens-rights/getRightsByUserId/" + userId,
      {
        headers: this.header,
      }
    );
  }
  updateScreenRights(Id, body) {
    return this.http.put<any>(
      this.ApiUrl + "screens-rights/update/" + Id,
      body,
      {
        headers: this.header,
      }
    );
  }

  //#endregion
}
