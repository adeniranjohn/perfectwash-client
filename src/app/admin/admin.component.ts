import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {
  error='';
  show = false;
  private authSubscription: Subscription;
  constructor(
    private auth: AuthenticateService,
    private router: Router,
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
  }
  getAdmin(user){
    this.show = true;
    this.authSubscription = this.auth.signin(user).subscribe(
    (response) => {
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        this.router.navigate([returnUrl || 'admin/adminboard']);
      }
    ,(err) => {
      this.error = err.error;
    });
    this.show = false;
  }

  ngOnDestroy(): void {
    if (this.authSubscription){
    this.authSubscription.unsubscribe();
    }
  }


}
