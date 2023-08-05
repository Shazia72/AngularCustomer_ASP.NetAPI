import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PartialObserver, Subscription } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-cust-postal-code',
  templateUrl: './cust-postal-code.component.html',
  styleUrls: ['./cust-postal-code.component.css']
})
export class CustPostalCodeComponent {
  employees: Map<string,number> =new Map<string,number>;

  CustomerSubscription: Subscription | undefined;

  findPostalcode:string='';

   constructor(public restapi: CustomerService,private router:Router) { }

  ngOnInit():void {
    this.fetchCustomer();
  }
  ngOnDestroy(): void {
    this.CustomerSubscription?.unsubscribe();
  }

  fetchCustomer(){
    this.restapi.getCustomerByFrequecnyOfPostalCode().subscribe( res =>{
      console.log(res);
      this.employees = res;
    })
    // let CustomerObserver : PartialObserver<Map<string, number>> ={
    //   next: (listOfCustomer:Map<string, number>) =>this.employees = listOfCustomer
    // };
    // this.CustomerSubscription = this.restapi.getCustomerByFrequecnyOfPostalCode().subscribe(CustomerObserver);
  }
}
