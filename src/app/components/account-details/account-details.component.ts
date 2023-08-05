import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartialObserver, Subscription } from 'rxjs';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent {
  account:Account |undefined;
  customerName:string='';
  AccountSubscription: Subscription | undefined;
  constructor(private employeeService: AccountService, private route: ActivatedRoute){}

ngOnInit():void{
  let idStr: string |null =this.route.snapshot.paramMap.get('id');
    if(idStr !== null) {
      let id: number = parseInt(idStr);
      let accountObserver: PartialObserver<Account> = {
        next: (accountFromApi: Account) => this.account = accountFromApi

      };

      this.AccountSubscription = this.employeeService.getAccountById(id).subscribe(accountObserver);
    }
 }
  ngOnDestroy(): void {
    this.AccountSubscription?.unsubscribe();
}
}
