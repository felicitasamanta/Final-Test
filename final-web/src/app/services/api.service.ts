import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postCustomer (data : any) {
    return this.http.post<any>("/api/customers", data);
  }

  getCustomer () {
    return this.http.get<any>("/api/customers");
  }


}
