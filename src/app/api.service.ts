import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

import { Customer } from './model/customer.model';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
   // private apiurl = `http://localhost:7000/api/v1`;
  private apiurl = `https://quiet-badlands-83944.herokuapp.com/api/v1`;
  customers: any;
  constructor(private http: HttpClient) {

   }

  getCustomer(customer): Observable<any> {
     return this.http.get(`${this.apiurl}/${customer.phonenumber}`).pipe(
       map(res => {
         return res;
        }),
       catchError(err => of([]))
     );
   }

  getCustomers(): Observable<any>{
      return this.http.get<Customer>(this.apiurl + '/admin/customers');
    }

  getShopCustomers(phoneNumber): Observable<any>{
      return this.http.get<Customer>(this.apiurl + `/admin/${phoneNumber}/customers`);
    }

  getTheCustomer(id): Observable<any>{
      return this.http.get<Customer>(`${this.apiurl}/admin/customers/${id}`);
    }

  postCustomer(user): Observable<any>{
      return this.http.post(`${this.apiurl}/admin/customers`, user);
    }

  deleteCustomer(id): Observable<any>{
      return this.http.delete(this.apiurl + '/admin/customers/' + id);
    }

  saveCustomer(customer): Observable<any>{
      return this.http.put(this.apiurl + '/admin/customers/' + customer._id, customer);
    }

  changePassword(value): Observable<any>{
      console.log(value);
      return this.http.put(this.apiurl + '/admin/changePassword', value);
    }

  getShops(): Observable<any>{
      return this.http.get(`${this.apiurl}/admin/shops`);
    }

  getTheShop(id): Observable<any>{
      return this.http.get(`${this.apiurl}/admin/shops/${id}`);
    }

  deleteShop(id): Observable<any>{
      return this.http.delete(this.apiurl + '/admin/shops/' + id);
    }

  getTotalWash(phone): Observable<any>{
      return this.http.get(`${this.apiurl}/shops/${phone}`);
    }

    getDailyWash(){

    }
}
