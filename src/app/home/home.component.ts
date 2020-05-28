import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../api.service';
import { Customer } from '../model/customer.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit, OnDestroy {
  thecustomer: Customer;
  custSub: any;
  show = false;

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
  }

  getCustomer(phonenumber) {
    this.show = true;
    this.custSub = this.api.getCustomer(phonenumber)
      .subscribe((theCustomer: any) => {
        const customer = theCustomer.data;
        this.thecustomer = customer.filter((c: Customer) => {
          return c.status !== 'Collected';
        });

      });
    this.show = false;
  }

  ngOnDestroy(): void{
    if(this.custSub){
    this.custSub.unsubscribe();
    }
  }
}

