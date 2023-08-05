import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = 'http://localhost:8010/v1'

  constructor( private http:HttpClient ) {}
  headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

     getCustomers():Observable<Customer[]>{
       return this.http.get<Customer[]>(`${this.apiUrl}/allCustomers`, {headers: this.headers});
     }

     getCustomerById(customerId: number): Observable<Customer> {
       return this.http.get<Customer>(`${this.apiUrl}/${customerId}`, {headers: this.headers});
     }

     getCustomerByFrequecnyOfPostalCode(): Observable<Map<string, number>> {
      return this.http.get<Map<string, number>>(`${this.apiUrl}/bypc`, {headers: this.headers});
    }

     createCustomer(contactToCreate: Customer): Observable<Customer> {
       return this.http.post<Customer>(this.apiUrl, contactToCreate, {headers: this.headers});
     }

     updateCustomer(employeeToUpdate: Customer): Observable<Customer> {
       return this.http.put<Customer>(`${this.apiUrl}/${employeeToUpdate.customerId}`, employeeToUpdate, {headers: this.headers});
     }

     deleteCustomer(customerId: any): Observable<Customer> {
       const url=`${this.apiUrl}/${customerId}`;
       console.log("url for delete  "+url);
       return this.http.delete<Customer>(this.apiUrl+"/"+customerId, {headers: this.headers});
     }
}
