import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  error='';
  imageurl = '../../assets/bannermed.jpg';
  constructor(
    private auth: AuthenticateService,
    private router: Router ) { }

  ngOnInit(): void {
  }
  getAdmin(user){
    this.auth.signin(user).subscribe(
    (data: any) => {
      this.auth.setToken(data.token);
      this.router.navigateByUrl('admin/adminboard');
    },
    err => {
      this.error =  err.error;
    }
    );
  }


}
