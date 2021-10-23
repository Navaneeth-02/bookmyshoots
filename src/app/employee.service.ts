import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Contact, Employee } from './employee';
import { LoginResponse } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8080";

  constructor(private httpClient: HttpClient ) { }

  createEmployee(employee: Employee) : Observable<object>
  {
    return this.httpClient.post(`${this.baseUrl}/register`, employee);
  }

  doLogin(userName : string, password : string): Observable<LoginResponse>{
    var config = {
      params : {
        name : userName,
        password : password
      }
    }
    return this.httpClient.get<LoginResponse>(`${this.baseUrl}/login`, config);
  }


  doComplain(contact: Contact) : Observable<object>
  {
    return this.httpClient.post(`${this.baseUrl}/contact`, contact);
  }

}