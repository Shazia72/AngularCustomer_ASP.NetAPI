import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PartialObserver, Subscription } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { Employee } from 'src/app/models/employee';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent {

  address={
    id:0,
    unitNumber:'',
    streetNumber:'',
    postalCode:''
  }

  private CustomerSubscription!: Subscription;
  constructor(public restapi: CustomerService, private router:Router ) { }

  ngOnInit():void {}

  addCustomer(customer:Customer):void{
    this.CustomerSubscription = this.restapi.createCustomer(customer)
    .subscribe((customer:Customer) => this.router.navigate(['/allCustomers']));
  }
}
