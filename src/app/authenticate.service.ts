import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  // private apiurl = `http://localhost:7000/api/v1`;
  private apiurl =  `https://quiet-badlands-83944.herokuapp.com/api/v1`;
  // tslint:disable-next-line: max-line-length
  constructor(
    private http: HttpClient,
    private router: Router,
    private jwtHelper: JwtHelperService) {

   }


  signin(user) {

    return this.http.post(this.apiurl + '/admin/signin', user)
          .pipe(map((response: any) => {
            if (response && response['x-pfw-token']){
              this.setToken(response['x-pfw-token']);

            }
          }),
          catchError((err: any) => {
            throw err;
          }
          ));
  }

  createShop(shop) {
    return this.http.post(this.apiurl + '/admin/createShop', shop)
    .subscribe(data => {
      this.router.navigateByUrl('/admin/adminboard');
    });
  }

  getToken(){
    return localStorage.getItem('x-pfw-token');
  }

  checkToken(){

  }
  setToken(token){
    localStorage.setItem('x-pfw-token', token);
  }

  logout(){
    localStorage.removeItem('x-pfw-token');
    this.router.navigateByUrl('/admin');
  }

  getPayLoad(){
    const token = this.getToken();
    if(token){
      const payload = this.jwtHelper.decodeToken(token);
      return payload;
    }else{
      this.router.navigateByUrl('/admin');
      return null;
    }
  }

  isLoggedin(){
   return !this.jwtHelper.isTokenExpired(this.getToken());
  }

  isAdmin(): boolean {
    const { role } = this.getPayLoad();
    if(role === 'Administrator'){
      return true;
    }else{
      return false;
    }
  }

  }
