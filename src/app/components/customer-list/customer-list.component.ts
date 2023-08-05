import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PartialObserver, Subscription } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  employees: any = [];

  CustomerSubscription: Subscription | undefined;

  findPostalcode:string='';

   constructor(public restapi: CustomerService,private router:Router) { }

  ngOnInit():void {
    this.fetchCustomer();
  }
  ngOnDestroy(): void {
    this.CustomerSubscription?.unsubscribe();
  }

  deleteCustomer(id: number):void{
    if(window.confirm("Are you sure you want to delete this Customer ?(y/n)") ){
    this.restapi.deleteCustomer(id).subscribe( (data=>{ this.fetchCustomer()}));
    }
  }
  fetchCustomer(){
    let CustomerObserver : PartialObserver<Customer[]> ={
      next: (listOfCustomer:Customer[]) =>this.employees = listOfCustomer
    };
    this.CustomerSubscription = this.restapi.getCustomers().subscribe(CustomerObserver);
  }
}
