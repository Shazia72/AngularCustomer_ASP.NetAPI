import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  apiUrl = 'http://localhost:1000/v1'

  constructor( private http:HttpClient ) {}
  headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

     getAccounts():Observable<Account[]>{
       return this.http.get<Account[]>(`${this.apiUrl}/allAccounts`, {headers: this.headers});
     }

     getAccountById(accountId: number): Observable<Account> {
       return this.http.get<Account>(`${this.apiUrl}/${accountId}`, {headers: this.headers});
     }

     createAccount(contactToCreate: Account): Observable<Account> {
       return this.http.post<Account>(this.apiUrl, contactToCreate, {headers: this.headers});
     }

     updateAccount(accountToUpdate: Account): Observable<Account> {
       return this.http.put<Account>(`${this.apiUrl}/${accountToUpdate.accountId}`, accountToUpdate, {headers: this.headers});
     }

     deleteAccount(accountId: any): Observable<Account> {
       const url=`${this.apiUrl}/${accountId}`;
       console.log("url for delete  "+url);
       return this.http.delete<Account>(this.apiUrl+"/"+accountId, {headers: this.headers});
     }
}
