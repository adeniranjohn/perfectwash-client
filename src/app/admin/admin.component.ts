import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  error='';
  constructor(
    private auth: AuthenticateService,
    private router: Router,
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
  }
  getAdmin(user){
    this.auth.signin(user).subscribe(
    (response) => {
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        this.router.navigate([returnUrl || 'admin/adminboard']);
      }
    ,(err) => {
      this.error = err.error;
    });
  }


}
