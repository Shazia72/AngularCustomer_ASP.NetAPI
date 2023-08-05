import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../models/customer';

@Pipe({
  name: 'postalCode'
})
export class PostalCodePipe implements PipeTransform {

  transform(values: Customer[], search: string): Customer[] {
    if (search === '') {
        return values;
    }

    let customers: Customer[] = [];
    for (let customer of values) {

        if (customer.address.streetNumber.toUpperCase().includes(search.toUpperCase() )
        || (customer.address.unitNumber.toUpperCase().includes(search.toUpperCase()) )
        ||(customer.address.postalCode.toUpperCase().includes(search.toUpperCase() ) )
        ||(customer.name.toUpperCase().includes(search.toUpperCase() ) )
        ) {
            customers.push(customer);
        }
    }
    return customers;
}

}
