import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TheadminRoutingModule } from './theadmin-routing.module';
import { TheadminComponent } from './theadmin.component';


@NgModule({
  declarations: [TheadminComponent],
  imports: [
    CommonModule,
    TheadminRoutingModule
  ]
})
export class TheadminModule { }
