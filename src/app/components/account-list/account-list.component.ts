import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PartialObserver, Subscription, combineLatest } from 'rxjs';
import { Account } from 'src/app/models/account';
import { AccountWithCustomer } from 'src/app/models/accountWithCustomer';
import { AccountService } from 'src/app/services/account.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})

export class AccountListComponent {
  allAccounts: any = [];
  AccountSubscription: Subscription | undefined;
  findBalance=0;

  constructor(public restapi: AccountService,private router:Router, private customerService:CustomerService) { }

  ngOnInit():void {
    this.fetchAccount();
  }
  ngOnDestroy(): void {
    this.AccountSubscription?.unsubscribe();
  }

  deleteAccount(id: number):void{
    if(window.confirm("Are you sure you want to delete this Account ?(y/n)") ){
    this.restapi.deleteAccount(id).subscribe( (data=>{ this.fetchAccount()}));
    }
  }
  fetchAccount(){
    let CustomerObserver : PartialObserver<Account[]> ={
      next: (listOfAccounts:Account[]) =>this.allAccounts = listOfAccounts
    };
    this.AccountSubscription = this.restapi.getAccounts().subscribe(CustomerObserver);
  }
}
