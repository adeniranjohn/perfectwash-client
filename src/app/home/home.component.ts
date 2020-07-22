import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../api.service';
import { Customer } from '../model/customer.model';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit, OnDestroy {
  thecustomer: Customer;
  custSub: any;
  loading = false;
  message: string;

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
  }

  getCustomer(phonenumber) {
    this.loading = true;
    this.custSub = this.api.getCustomer(phonenumber)
      .pipe(finalize(() => this.loading = false))
      .subscribe((theCustomer: any) => {
        const customer = theCustomer.data;
        if (customer.length === 0) {
          this.message = '*Not yet registered';
          console.log(this.message);
        }
        console.log(customer);
        this.thecustomer = customer.filter((c: Customer) => {
          return c.status !== 'Collected';
        });

      });
  }

  ngOnDestroy(): void{
    if(this.custSub){
    this.custSub.unsubscribe();
    }
  }
}

