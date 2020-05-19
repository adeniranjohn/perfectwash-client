import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { AdminboardComponent } from './adminboard/adminboard.component';
import { CreateshopComponent } from './createshop/createshop.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomersComponent } from './customers/customers.component';
import { RegCustomerComponent } from './reg-customer/reg-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AuthGuard } from './auth.guard';
import { AuthenticateService } from './authenticate.service';
import { JwtModule } from '@auth0/angular-jwt';
import { Interceptor } from './interceptor/interceptor';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { ShopsComponent } from './shops/shops.component';
import { ShopComponent } from './shop/shop.component';
import { EditshopComponent } from './editshop/editshop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export function getToken(){
  return localStorage.getItem('token');
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    AdminComponent,
    AdminboardComponent,
    CreateshopComponent,
    CustomerComponent,
    CustomersComponent,
    RegCustomerComponent,
    EditCustomerComponent,
    ChangePasswordComponent,
    AdminNavComponent,
    ShopsComponent,
    ShopComponent,
    EditshopComponent,
    ContactComponent,
    PagenotfoundComponent
  ],
  imports: [
    JwtModule.forRoot({
      config: {
        tokenGetter: getToken,
        whitelistedDomains: ['http://localhost:4200/', 'http://localhost:4200/admin' ],
        blacklistedRoutes: []
      }
    }),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,
       useClass: Interceptor,
        multi: true },
        AuthGuard,
    AuthenticateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
