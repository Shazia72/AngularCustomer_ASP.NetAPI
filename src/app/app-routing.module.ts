import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
//import { CustomerListComponent } from './components/employee-list/employee-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { AccountAddComponent } from './components/account-add/account-add.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { CustomerDeleteComponent } from './components/customer-delete/customer-delete.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { AccountEditComponent } from './components/account-edit/account-edit.component';
import { CustComponent } from './components/cust/cust.component';
import { CustListComponent } from './components/cust-list/cust-list.component';
import { CustPostalCodeComponent } from './components/cust-postal-code/cust-postal-code.component';

const routes: Routes = [
{ path : '', pathMatch: 'full', redirectTo: 'allCustomers'},
{ path : 'allCustomers', component: CustomerListComponent },
{ path : 'allAccounts', component: AccountListComponent },
{ path: 'add', component:CustomerAddComponent},
{ path: 'addAccount', component:AccountAddComponent},
{ path: 'details/:id', component: CustomerDetailsComponent},
{ path: 'accountDetails/:id', component: AccountDetailsComponent},
{ path: 'edit/:id', component: CustomerEditComponent },
{ path: 'editAccount/:id', component: AccountEditComponent },
{ path : 'delete/:id' , component: CustomerDeleteComponent},
{ path: 'addCustAddress', component:CustComponent},
{ path : 'allCustomersAddress', component: CustListComponent },
{ path : 'CustomersByPostalCode', component: CustPostalCodeComponent },
{ path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
