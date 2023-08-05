import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartialObserver, Subscription } from 'rxjs';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent {
  account: Account |undefined;
  private AccountSubscription!: Subscription;
  constructor(public restapi: AccountService, private router:Router, private route: ActivatedRoute ) { }
  ngOnInit(): void {

  let idStr: string | null = this.route.snapshot.paramMap.get('id');

    if(idStr !== null) {
      let id: number = parseInt(idStr);
      let accountObserver: PartialObserver<Account> = {
        next: (accountFromApi: Account) => this.account = accountFromApi
      };
      this.AccountSubscription = this.restapi.getAccountById(id).subscribe(accountObserver);
    }
  }
  update() {
    if(this.account) {
      let updateObserver: PartialObserver<Account> = {
        next: (employee: Account) => {
          console.log('customer was updated.');
          this.router.navigate(['/allAccounts']);
        }
      }
      this.restapi.updateAccount(this.account).subscribe(updateObserver);
    }
}

ngOnDestroy(): void {
  this.AccountSubscription?.unsubscribe();
}
}
