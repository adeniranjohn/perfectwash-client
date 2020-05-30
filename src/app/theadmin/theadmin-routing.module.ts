import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateshopComponent } from './createshop/createshop.component';
import { AuthGuard } from '../auth.guard';
import { AdminboardComponent } from './adminboard/adminboard.component';
import { CustomersComponent } from './customers/customers.component';
import { RegCustomerComponent } from './reg-customer/reg-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ShopsComponent } from './shops/shops.component';
import { EditshopComponent } from './editshop/editshop.component';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'createshop',
    component: CreateshopComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'adminboard',
    component: AdminboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'washes',
    component: CustomersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'makeawash',
    component: RegCustomerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'washes/:id',
    component: EditCustomerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'shops/:id/edit',
    component: ChangePasswordComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'shops',
    component: ShopsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'shops/:id',
    component: EditshopComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'home'
  }];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class TheadminRoutingModule { }
