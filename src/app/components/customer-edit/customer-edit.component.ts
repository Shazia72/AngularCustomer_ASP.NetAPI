import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartialObserver, Subscription } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { Employee } from 'src/app/models/employee';
import { CustomerService } from 'src/app/services/customer.service';
import { EmployeeRestApiService } from 'src/app/services/employee-rest-api.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent {

  employee: Customer |undefined;
  private CustomerSubscription!: Subscription;

  address={
    id:0,
    unitNumber:'',
    streetNumber:'',
    postalCode:''
  }

  constructor(public restapi: CustomerService, private router:Router, private route: ActivatedRoute ) { }
  ngOnInit(): void {

  let idStr: string | null = this.route.snapshot.paramMap.get('id');

    if(idStr !== null) {
      let id: number = parseInt(idStr);
      let employeeObserver: PartialObserver<Customer> = {
        next: (employeeFromApi: Customer) => this.employee = employeeFromApi
      };
      this.CustomerSubscription = this.restapi.getCustomerById(id).subscribe(employeeObserver);
    }
  }
  update() {
    if(this.employee) {
      let updateObserver: PartialObserver<Customer> = {
        next: (employee: Customer) => {
          console.log('customer was updated.');
          this.router.navigate(['/allCustomers']);
        }
      }
      this.restapi.updateCustomer(this.employee).subscribe(updateObserver);
    }
}

ngOnDestroy(): void {
  this.CustomerSubscription?.unsubscribe();
}

}
