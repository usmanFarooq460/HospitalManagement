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

  // ******************* Define Store **************************

  SaveStoreName(data) {
    return this.http.post<any>(this.apiUrl + "def_Store/addNew", data, {
      headers: this.header,
    });
  }

  UpdateStoreName(Id, data) {
    return this.http.put<any>(this.apiUrl + "def_Store/update/" + Id, data, {
      headers: this.header,
    });
  }

  getHistoryStoreName() {
    return this.http
      .get<any>(this.apiUrl + "def_Store/getAll", {
        headers: this.header,
      })
  }

  deleteStoreName(id) {
    return this.http.delete<any>(this.apiUrl + "def_Store/delete/" + id, {
      headers: this.header,
    });
  }

  // ********************* Define Rack *******************************

  getHistoryofRacks() {
    return this.http.get<any>(this.apiUrl + "def_rack/getAll", {
      headers: this.header,
    });
  }

  saveRack(data) {
    return this.http.post<any>(this.apiUrl + "def_rack/addNew", data, {
      headers: this.header,
    });
  }

  updateRack(id, data) {
    return this.http.put<any>(this.apiUrl + "def_rack/update/" + id, data, {
      headers: this.header,
    });
  }

  deleteRack(id) {
    return this.http.delete<any>(this.apiUrl + "def_rack/delete/" + id, {
      headers: this.header,
    });
  }

  // **************** Add medicine to store ******************

  getRackByStore(storeId) {
    return this.http.get<any>(
      this.apiUrl + "def_rack/getRackByStoreId/" + storeId,
      {
        headers: this.header,
      }
    ).toPromise();
  }

  SaveAddingDataToStore(data) {
    return this.http.post<any>(
      this.apiUrl + "add_Record_in_store/addNew",
      data,
      {
        headers: this.header,
      }
    );
  }

  getHistoryOfStore() {
    return this.http.get<any>(this.apiUrl + "add_Record_in_store/getAll", {
      headers: this.header,
    });
  }

  updateAddingDataToStore(id, data) {
    return this.http.put<any>(
      this.apiUrl + "add_Record_in_store/update/" + id,
      data,
      {
        headers: this.header,
      }
    );
  }

  deleteAddedDataInStore(id) {
    return this.http.delete<any>(
      this.apiUrl + "add_Record_in_store/delete/" + id,
      {
        headers: this.header,
      }
    );
  }
  getStoreRecordById(id) {
    return this.http.get<any>(this.apiUrl + "add_Record_in_store/getById/" + id,{
        headers: this.header,
      });
  }
}
