import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { AuthenticateService } from '../../authenticate.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-reg-customer',
  templateUrl: './reg-customer.component.html',
  styleUrls: ['./reg-customer.component.css']
})
export class RegCustomerComponent implements OnInit {
  custSub: any;
  constructor(
     private api: ApiService,
     private router: Router,
     private auth: AuthenticateService,
     private location: Location) { }

  ngOnInit(): void {
  }

  regCustomer(user){
    const { phoneNumber } = this.auth.getPayLoad();
    user.shopPhone = phoneNumber;
    this.custSub = this.api.postCustomer(user)
    .subscribe(data => {
    if(data){
      this.router.navigate(['/admin/adminboard']);
    }
    });
  }

  back(){
    this.location.back();
  }

  ngOnDestroy(): void {
    if(this.custSub){
    this.custSub.unsubscribe();
    }
  }


}
