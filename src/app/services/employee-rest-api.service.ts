import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable , throwError} from 'rxjs';
import {retry, catchError } from 'rxjs/operators';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeRestApiService {
  apiUrl = 'http://localhost:8080/v1'

 constructor( private http:HttpClient ) {}
 headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

    getEmployees():Observable<Employee[]>{
      return this.http.get<Employee[]>(`${this.apiUrl}/all`, {headers: this.headers});
    }

    getEmployeeById(id: number): Observable<Employee> {
      return this.http.get<Employee>(`${this.apiUrl}/${id}`, {headers: this.headers});
    }

    createEmployee(contactToCreate: Employee): Observable<Employee> {
      return this.http.post<Employee>(this.apiUrl, contactToCreate, {headers: this.headers});
    }

    updateEmployee(employeeToUpdate: Employee): Observable<Employee> {
      return this.http.put<Employee>(`${this.apiUrl}/${employeeToUpdate.id}`, employeeToUpdate, {headers: this.headers});
    }

    deleteEmployee(id: any): Observable<Employee> {
      const url=`${this.apiUrl}/${id}`;
      console.log("url for delete  "+url);
      return this.http.delete<Employee>(this.apiUrl+"/"+id, {headers: this.headers});
    }
}
