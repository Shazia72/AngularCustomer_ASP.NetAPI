import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustAddress } from 'src/app/models/cust-address';
import { Customer } from 'src/app/models/customer';
import { CustAddressService } from 'src/app/services/cust-address.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-cust',
  templateUrl: './cust.component.html',
  styleUrls: ['./cust.component.css']
})

export class CustComponent {

  address={
    id:0,
    unitNumber:'',
    streetNumber:'',
    postalCode:''
  }
  // custAdd : CustAddress ={
  //   customerId:0,
  //   name:'',
  //   address:{
  //   id:0,
  //   unitNumber:'',
  //   streetNumber:'',
  //   postalCode:''
  // }
  // }

  private CustomerSubscription!: Subscription;
  constructor(public restapi: CustAddressService, private router:Router ) { }

  ngOnInit():void {}

  addCustomerWithAddress(customer:CustAddress):void{
    console.log("form angu "+customer.address);
    this.CustomerSubscription = this.restapi.createCustadd(customer)
    .subscribe((customer:CustAddress) => this.router.navigate(['/allCustomers']));
  }
}
