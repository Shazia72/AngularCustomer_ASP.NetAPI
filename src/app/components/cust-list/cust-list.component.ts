import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PartialObserver, Subscription } from 'rxjs';
import { CustAddress } from 'src/app/models/cust-address';
import { CustAddressService } from 'src/app/services/cust-address.service';

@Component({
  selector: 'app-cust-list',
  templateUrl: './cust-list.component.html',
  styleUrls: ['./cust-list.component.css']
})
export class CustListComponent {

  CustomerSubscription: Subscription | undefined;
  findPostalcode:string='';

employees: any[] = [];

   constructor(public restapi: CustAddressService,private router:Router) { }

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
    this.restapi.getCustomers().subscribe( res =>{
      console.log("cudt : "+res);
      //this.employees = res;
      res.forEach (a=>{
       this.employees.push(a)
      });
      console.log(this.employees);
    })
    // let EmployeeObserver : PartialObserver<CustAddress[]> ={
    //   next: (listOfEmployees:CustAddress[]) =>this.employees = listOfEmployees
    // };
    // this.CustomerSubscription = this.restapi.getCustomers().subscribe(EmployeeObserver);
    }
}
