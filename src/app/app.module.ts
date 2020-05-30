import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './theadmin/admin/admin.component';
import { AuthGuard } from './auth.guard';
import { AuthenticateService } from './authenticate.service';
import { JwtModule } from '@auth0/angular-jwt';
import { Interceptor } from './interceptor/interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TheadminModule } from './theadmin/theadmin.module';
import { CommonModule } from '@angular/common';

export function getToken(){
  return localStorage.getItem('token');
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    ContactComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: getToken,
        whitelistedDomains: [],
        blacklistedRoutes: []
      }
    })
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
