import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartialObserver } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { Customer } from 'src/app/models/customer';
import { Employee } from 'src/app/models/employee';
import { CustomerService } from 'src/app/services/customer.service';
import { EmployeeRestApiService } from 'src/app/services/employee-rest-api.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {

  employee:Customer |undefined;

  CustomerSubscription: Subscription | undefined;
  constructor(private employeeService: CustomerService, private route: ActivatedRoute){}

ngOnInit():void{
  let idStr: string |null =this.route.snapshot.paramMap.get('id');
    if(idStr !== null) {
      let id: number = parseInt(idStr);
      let contactObserver: PartialObserver<Customer> = {
        next: (contactFromApi: Customer) => this.employee = contactFromApi
      };

      this.CustomerSubscription = this.employeeService.getCustomerById(id).subscribe(contactObserver);
    }
 }
  ngOnDestroy(): void {
    this.CustomerSubscription?.unsubscribe();
}
}
