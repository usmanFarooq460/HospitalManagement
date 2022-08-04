import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

  header = new HttpHeaders({ "Content-Type": "application/json" });
  apiUrl=environment.apiUrl
  constructor() { }
}
