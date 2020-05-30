import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';
import {Location } from '@angular/common';
import { ApiService } from '../../api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Shop } from '../../model/shop.model';

@Component({
  selector: 'app-editshop',
  templateUrl: './editshop.component.html',
  styleUrls: ['./editshop.component.css']
})
export class EditshopComponent implements OnInit, OnDestroy {
  @Input() theshop: Shop;
  id;
  totalWash;
  totalWashAmount;
  dailyWashes;
  wash;
  shopSub: any;
  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router,
    private location: Location) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.shopSub = this.api.getTheShop(this.id)
    .subscribe((response: any) => {
      this.theshop = response.shop[0];
      this.totalWash = (response.washes).length;
      this.totalWashAmount = (response.washes).reduce((total, wash) => {
        return total + parseFloat(wash.amountPaid);
      },0);


    });



  }

  editShop(){
    this.router.navigate(['admin/shops', this.theshop._id, 'edit']);
  }
  back() {
    this.location.back();
  }

  delete(){
    this.api.deleteShop(this.theshop._id)
    .subscribe(res => res);
    this.location.back();
  }

  ngOnDestroy(): void{
    this.shopSub.unsubscribe();
  }

}
