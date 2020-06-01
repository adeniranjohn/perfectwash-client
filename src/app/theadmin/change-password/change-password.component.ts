import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Shop } from '../../model/shop.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit, OnDestroy {
  theroles = ['Supervisor', 'Administrator'];
  id;
  error='';
  editshop: Shop;
  shopSub: any;
  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.shopSub = this.api.getTheShop(this.id)
    .subscribe((response: any) => {
      this.editshop = response.shop[0];
    });

  }

  changePassword(value){
  const { password, confirmpassword } = value;
  value.phoneNumber = this.editshop.phoneNumber;
  console.log(value);
  if (password === confirmpassword){

      this.api.changePassword(value)
      .subscribe((res: any) => {
        console.log(res);
      },(err: any) => {
        console.log(err)
        this.error = err.error;
      });
    this.router.navigateByUrl('/admin');

    }else{
    this.error = 'Check: Confirm password';
    }

}

back(){
  this.location.back();
}

 ngOnDestroy(): void{
   this.shopSub.unsubscribe();
 }

}
