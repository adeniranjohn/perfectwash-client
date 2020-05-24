import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Shop } from '../model/shop.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit, OnDestroy{
  @Input() shops: Shop[];
  @Output() theShop: Shop;
  shopsSub: any;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.getShops();
  }

  selectShop(shop: Shop){
    this.theShop = shop;
    this.router.navigate([`/admin/shops/${this.theShop._id}`]);
  }


  getShops(){
    this.shopsSub = this.api.getShops()
    .subscribe((res: any) => {
      this.shops = res.shops;
    } );
  }

  ngOnDestroy(): void {
    this.shopsSub.unsubscribe();
  }
}
