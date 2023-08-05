import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartialObserver, Subscription } from 'rxjs';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account-delete',
  templateUrl: './account-delete.component.html',
  styleUrls: ['./account-delete.component.css']
})
export class AccountDeleteComponent {
  account: Account |undefined;
  private AccountSubscription!: Subscription;

  constructor(public restapi: AccountService,private router:Router ,private route: ActivatedRoute) { }

OnInit():void{
  let idStr: string | null = this.route.snapshot.paramMap.get('id');

    if(idStr !== null) {
      let id: number = parseInt(idStr);
      let accountObserver: PartialObserver<Account> = {
        next: (accountFromApi: Account) => this.account = accountFromApi
      };
      this.AccountSubscription = this.restapi.getAccountById(id).subscribe(accountObserver);
      console.log("from page "+id);

  }
}
  deleteAccount(){
    if(window.confirm("Are you want to delete this item ?(y/n)") ){

      let AccountObserver : PartialObserver<Account> ={
        //id:any =100;
        next :(accountToDelete:Account) => this.router.navigate(['/allAccounts'])
      }
      this.restapi.deleteAccount(1902).subscribe();
    }
  }
}
