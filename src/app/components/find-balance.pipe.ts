import { Pipe, PipeTransform } from '@angular/core';
import { Account } from '../models/account';

@Pipe({
  name: 'findBalance'
})
export class FindBalancePipe implements PipeTransform {

  transform(values: Account[], search: number): Account[] {
    if (search === 0) {
        return values;
    }

    let accounts: Account[] = [];
    for (let account of values) {

        if (account.balance > search)
         {
            accounts.push(account);
        }
    }
    return accounts;
}

}
