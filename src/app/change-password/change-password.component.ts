import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Shop } from '../model/shop.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  theroles = ['Supervisor', 'Administrator'];
  id;
  error='';
  editshop: Shop;
  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.api.getTheShop(this.id)
    .subscribe((response: any) => {
      this.editshop = response.shop[0];
    });

  }

  changePassword(value){
  const { phoneNumber, password, confirmPassword } = value;
  console.log(phoneNumber, password, confirmPassword);
  if (password === confirmPassword){
      this.api.changePassword(value)
      .subscribe((res: any) => {
      },(err: any) => {
        this.error = err.error;
      });

    }else{
    this.error = 'Password not compatible';
    }
  this.router.navigateByUrl('admin/adminBoard');
}

}
