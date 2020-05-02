import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Location } from '@angular/common';
import { Customer } from '../model/customer.model';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  id: string;
  @Input() thecustomer; aCustomer;
  imageurl = '../../assets/bannermed.jpg';
  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router,
    private location: Location) {

   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {this.id = params.id; });
    this.api.getTheCustomer(this.id)
    .subscribe((response: any) => {
      this.thecustomer = response.customer[0];
    });
  }


  saveCustomerStatus(customer){

    customer._id = this.id;
    this.api.saveCustomer(customer).subscribe(res => res);
    this.router.navigateByUrl('/admin/adminboard');

  }

  deleteItems(){
    this.api.deleteCustomer(this.id)
    .subscribe(res => res);
    this.router.navigateByUrl('/admin/adminboard');
  }

  cancel(){
    this.location.back();
  }



}
