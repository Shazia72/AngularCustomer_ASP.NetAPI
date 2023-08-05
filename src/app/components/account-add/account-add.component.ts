import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PartialObserver, Subscription } from 'rxjs';
import { Account } from 'src/app/models/account';
import { Customer } from 'src/app/models/customer';
import { AccountService } from 'src/app/services/account.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-account-add',
  templateUrl: './account-add.component.html',
  styleUrls: ['./account-add.component.css']
})
export class AccountAddComponent {
  private AccountSubscription!: Subscription;
  private CustomerSubscription!: Subscription;
  customers: any = [];
  customerNames: any=[];
  customerIds: any=[];

  constructor(public restapi: AccountService, private router:Router, private customerService: CustomerService ) { }

  ngOnInit():void {
    this.fetchCustomers();
  }

  addEmployee(account:Account):void{
    this.AccountSubscription = this.restapi.createAccount(account)
    .subscribe((account:Account) => this.router.navigate(['/allAccounts']));
    console.log("dfd "+account.accountId,account.customerId, account.balance);
  }

  fetchCustomers(){
    this.customerService.getCustomers().subscribe(res=>{
      if(res.length>0){
        this.customers = res;
      }
      console.log("get all customers "+this.customers)
    })
  }
}
