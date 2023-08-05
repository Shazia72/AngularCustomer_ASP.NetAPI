import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { AccountAddComponent } from './components/account-add/account-add.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { AccountDeleteComponent } from './components/account-delete/account-delete.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AccountEditComponent } from './components/account-edit/account-edit.component';
import { FindBalancePipe } from './components/find-balance.pipe';
import { PostalCodePipe } from './components/postal-code.pipe';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustComponent } from './components/cust/cust.component';
import { CustListComponent } from './components/cust-list/cust-list.component';
import { CustPostalCodeComponent } from './components/cust-postal-code/cust-postal-code.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    NavbarComponent,
    PageNotFoundComponent,
    CustomerAddComponent,
    CustomerDetailsComponent,
    CustomerEditComponent,
    CustomerListComponent,
    AccountListComponent,
    AccountAddComponent,
    AccountDeleteComponent,
    AccountDetailsComponent,
    AccountEditComponent,
    FindBalancePipe,
    PostalCodePipe,
    CustComponent,
    CustListComponent,
    CustPostalCodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
