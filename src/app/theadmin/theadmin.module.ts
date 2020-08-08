import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheadminRoutingModule } from './theadmin-routing.module';
import { CustomersComponent } from './customers/customers.component';
import { AdminboardComponent } from './adminboard/adminboard.component';
import { CreateshopComponent } from './createshop/createshop.component';
import { CustomerComponent } from './customer/customer.component';
import { RegCustomerComponent } from './reg-customer/reg-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { ShopsComponent } from './shops/shops.component';
import { ShopComponent } from './shop/shop.component';
import { EditshopComponent } from './editshop/editshop.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { AppModule } from '../app.module';
import { AdminComponent } from './admin/admin.component';
import { ApiService } from '../api.service';
import { AuthenticateService } from '../authenticate.service';
import { Interceptor } from '../interceptor/interceptor';
import { AuthGuard } from '../auth.guard';


@NgModule({
  declarations: [
    CustomersComponent,
    AdminboardComponent,
    CreateshopComponent,
    CustomerComponent,
    RegCustomerComponent,
    EditCustomerComponent,
    ChangePasswordComponent,
    AdminNavComponent,
    ShopsComponent,
    ShopComponent,
    EditshopComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    TheadminRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule

  ],
  exports: [

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
    AuthGuard,
    AuthenticateService,
    ApiService
  ]})
export class TheadminModule { }
