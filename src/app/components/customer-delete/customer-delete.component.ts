import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartialObserver, Subscription } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { Employee } from 'src/app/models/employee';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent {

  employee: Customer |undefined;
  private EmployeeSubscription!: Subscription;

  constructor(public restapi: CustomerService,private router:Router ,private route: ActivatedRoute) { }

OnInit():void{
  let idStr: string | null = this.route.snapshot.paramMap.get('id');

    if(idStr !== null) {
      let id: number = parseInt(idStr);
      let employeeObserver: PartialObserver<Customer> = {
        next: (employeeFromApi: Customer) => this.employee = employeeFromApi
      };
      this.EmployeeSubscription = this.restapi.getCustomerById(id).subscribe(employeeObserver);
      console.log("from page "+id);
}
}
  deleteCustomer(){
    if(window.confirm("Are you want to delete this item ?(y/n)") ){

      let EmployeeObserver : PartialObserver<Customer> ={
        next :(emptoDelete:Customer) => this.router.navigate(['/all'])
      }
      this.restapi.deleteCustomer(1902).subscribe();
    }
  }
}
